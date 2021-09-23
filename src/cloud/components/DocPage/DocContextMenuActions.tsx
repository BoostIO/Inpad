import React, { useCallback, useMemo, useState } from 'react'
import {
  mdiStarOutline,
  mdiContentCopy,
  mdiOpenInNew,
  mdiPaletteOutline,
  mdiArrowRight,
  mdiFileCodeOutline,
  mdiFilePdfOutline,
  mdiLanguageMarkdownOutline,
  mdiTrashCanOutline,
  mdiStar,
  mdiHistory,
} from '@mdi/js'
import { SerializedDocWithBookmark } from '../../interfaces/db/doc'

import copy from 'copy-to-clipboard'
import { SerializedTeam } from '../../interfaces/db/team'
import { getDocLinkHref } from '../Link/DocLink'
import { boostHubBaseUrl } from '../../lib/consts'
import { usingElectron, sendToHost } from '../../lib/stores/electron'
import { useToast } from '../../../design/lib/stores/toast'
import { useSettings } from '../../lib/stores/settings'
import { trackEvent } from '../../api/track'
import { MixpanelActionTrackTypes } from '../../interfaces/analytics/mixpanel'
import {
  CreateDocTemplateResponseBody,
  saveDocAsTemplate,
} from '../../api/teams/docs/templates'

import { exportAsMarkdownFile, filenamifyTitle } from '../../lib/export'
import { downloadBlob, downloadString, printIframe } from '../../lib/download'
import { useNav } from '../../lib/stores/nav'
import MoveItemModal from '../Modal/contents/Forms/MoveItemModal'
import { useModal } from '../../../design/lib/stores/modal'
import { useI18n } from '../../lib/hooks/useI18n'
import { lngKeys } from '../../lib/i18n/types'
import MetadataContainerRow from '../../../design/components/organisms/MetadataContainer/molecules/MetadataContainerRow'
import { useCloudApi } from '../../lib/hooks/useCloudApi'
import { useCloudResourceModals } from '../../lib/hooks/useCloudResourceModals'
import RevisionsModal from '../Modal/contents/Doc/RevisionsModal'
import { SerializedRevision } from '../../interfaces/db/revision'
import MetadataContainerBreak from '../../../design/components/organisms/MetadataContainer/atoms/MetadataContainerBreak'
import { usePage } from '../../lib/stores/pageStore'
import Button from '../../../design/components/atoms/Button'
import {
  getDocExportForHTML,
  getDocExportForPDF,
} from '../../api/teams/docs/exports'

export interface DocContextMenuActionsProps {
  team: SerializedTeam
  doc: SerializedDocWithBookmark
  currentUserIsCoreMember: boolean
  editorRef?: React.MutableRefObject<CodeMirror.Editor | null>
  restoreRevision?: (revision: SerializedRevision) => void
  isCanvas?: boolean
}

export function DocContextMenuActions({
  team,
  doc,
  currentUserIsCoreMember,
  editorRef,
  restoreRevision,
  isCanvas,
}: DocContextMenuActionsProps) {
  const { translate } = useI18n()
  const { sendingMap, toggleDocBookmark, send, updateDoc } = useCloudApi()
  const { deleteDoc } = useCloudResourceModals()
  const { openModal, closeAllModals } = useModal()
  const { pushMessage } = useToast()
  const { updateTemplatesMap } = useNav()
  const [copied, setCopied] = useState(false)
  const { subscription } = usePage()
  const { openSettingsTab } = useSettings()

  const docUrl = useMemo(() => {
    return boostHubBaseUrl + getDocLinkHref(doc, team, 'index')
  }, [team, doc])

  const copyButtonHandler = useCallback(() => {
    copy(docUrl)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 200)
  }, [docUrl])

  const getUpdatedDoc = useCallback(() => {
    const updatedDoc = {
      ...doc,
      head: {
        ...(doc.head || { title: '', content: '' }),
      },
    } as SerializedDocWithBookmark

    if (editorRef != null && editorRef.current != null) {
      updatedDoc.head!.content = editorRef.current.getValue()
    }

    return updatedDoc
  }, [doc, editorRef])

  const exportAsMarkdown = useCallback(() => {
    trackEvent(MixpanelActionTrackTypes.ExportMd)
    return exportAsMarkdownFile(getUpdatedDoc(), { includeFrontMatter: true })
  }, [getUpdatedDoc])

  const exportAsHtml = useCallback(async () => {
    if (subscription == null) {
      return
    }
    try {
      trackEvent(MixpanelActionTrackTypes.ExportHtml)
      const updatedDoc = getUpdatedDoc()
      const htmlFile = await getDocExportForHTML(
        updatedDoc.teamId,
        updatedDoc.id
      )
      console.log('Html', htmlFile)
      downloadString(
        htmlFile.html,
        `${filenamifyTitle(doc.title)}.html`,
        'text/html'
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      pushMessage({
        title: 'Failed to export as HTML',
        description: error.message,
      })
    }
  }, [subscription, getUpdatedDoc, doc.title, pushMessage])

  const exportAsPdf = useCallback(async () => {
    if (subscription == null) {
      return
    }
    const updatedDoc = getUpdatedDoc()
    if (updatedDoc.head == null) {
      return
    }
    try {
      const pdfName = `${filenamifyTitle(updatedDoc.title)}.pdf`
      if (usingElectron) {
        // const printOpts = {
        //   printBackground: true,
        //   pageSize: 'A4',
        // }
        const pdfFile = await getDocExportForPDF(
          updatedDoc.teamId,
          updatedDoc.id
        )
        const buffer = new Uint8Array(pdfFile.buffer.data)
        const blob = new Blob([buffer], { type: 'application/pdf' })
        downloadBlob(blob, pdfName)
      } else {
        const htmlFile = await getDocExportForHTML(
          updatedDoc.teamId,
          updatedDoc.id
        )
        printIframe(htmlFile.html, pdfName)
      }
      trackEvent(MixpanelActionTrackTypes.ExportPdf)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      pushMessage({
        title: 'Failed to export as PDF',
        description: error.message,
      })
    }
  }, [subscription, getUpdatedDoc, pushMessage])

  const createTemplate = useCallback(async () => {
    return send(`${doc.id}-template`, 'create', {
      api: () => saveDocAsTemplate(team.id, doc.id),
      cb: ({ template }: CreateDocTemplateResponseBody) => {
        updateTemplatesMap([template.id, template])
      },
    })
  }, [team.id, doc.id, updateTemplatesMap, send])

  const openMoveForm = useCallback(() => {
    openModal(
      <MoveItemModal
        onSubmit={(workspaceId, parentFolderId) =>
          updateDoc(doc, { workspaceId, parentFolderId })
        }
      />
    )
  }, [doc, openModal, updateDoc])

  const revisionNavigateCallback = useCallback(() => {
    openModal(
      <RevisionsModal
        currentDoc={doc}
        restoreRevision={currentUserIsCoreMember ? restoreRevision : undefined}
      />,
      {
        width: 'large',
      }
    )
    trackEvent(MixpanelActionTrackTypes.RevisionHistoryOpen, {
      docId: doc.id,
    })
  }, [doc, openModal, restoreRevision, currentUserIsCoreMember])

  return (
    <>
      <MetadataContainerRow
        row={{
          type: 'button',
          props: {
            id: 'metadata-bookmark',
            disabled: sendingMap.has(doc.id),
            spinning: sendingMap.get(doc.id) === 'bookmark',
            label: doc.bookmarked
              ? translate(lngKeys.GeneralUnbookmarkVerb)
              : translate(lngKeys.GeneralBookmarkVerb),
            iconPath: doc.bookmarked ? mdiStar : mdiStarOutline,
            onClick: () =>
              toggleDocBookmark(doc.teamId, doc.id, doc.bookmarked),
          },
        }}
      />
      {currentUserIsCoreMember && !isCanvas && (
        <MetadataContainerRow
          row={{
            type: 'button',
            props: {
              id: 'metadata-template',
              label: translate(lngKeys.DocSaveAsTemplate),
              iconPath: mdiPaletteOutline,
              onClick: createTemplate,
              disabled: sendingMap.has(`${doc.id}-template`),
              spinning: sendingMap.get(`${doc.id}-template`) === 'create',
            },
          }}
        />
      )}
      {!isCanvas && (
        <MetadataContainerRow
          row={{
            type: 'button',
            props: {
              id: 'metadata-history',
              onClick: revisionNavigateCallback,
              iconPath: mdiHistory,
              label: translate(lngKeys.History),
            },
          }}
        />
      )}
      <MetadataContainerRow
        row={{
          type: 'button',
          props: {
            id: 'metadata-copy-link',
            label: translate(lngKeys.GeneralCopyTheLink),
            iconPath: mdiContentCopy,
            spinning: copied,
            disabled: copied,
            onClick: copyButtonHandler,
          },
        }}
      />
      {usingElectron && (
        <MetadataContainerRow
          row={{
            type: 'button',
            props: {
              id: 'metadata-open-new',
              label: translate(lngKeys.OpenInBrowser),
              iconPath: mdiOpenInNew,
              onClick: () => {
                sendToHost('open-external-url', docUrl)
              },
            },
          }}
        />
      )}
      {!isCanvas && (
        <>
          <MetadataContainerBreak />
          <MetadataContainerRow
            row={{
              type: 'button',
              props: {
                id: 'metadata-export-markdown',
                label: translate(lngKeys.DocExportMarkdown),
                iconPath: mdiLanguageMarkdownOutline,
                onClick: exportAsMarkdown,
              },
            }}
          />
          <MetadataContainerRow
            row={{
              type: 'button',
              props: {
                id: 'metadata-export-html',
                label: translate(lngKeys.DocExportHtml),
                iconPath: mdiFileCodeOutline,
                onClick: exportAsHtml,
                disabled: subscription == null,
              },
            }}
          >
            {subscription == null && (
              <Button
                variant='secondary'
                onClick={() => {
                  closeAllModals()
                  openSettingsTab('teamUpgrade')
                }}
              >
                Upgrade
              </Button>
            )}
          </MetadataContainerRow>
          <MetadataContainerRow
            row={{
              type: 'button',
              props: {
                id: 'metadata-export-pdf',
                label: translate(lngKeys.DocExportPdf),
                iconPath: mdiFilePdfOutline,
                onClick: exportAsPdf,
                disabled: subscription == null,
              },
            }}
          >
            {subscription == null && (
              <Button
                variant='secondary'
                onClick={() => {
                  closeAllModals()
                  openSettingsTab('teamUpgrade')
                }}
              >
                Upgrade
              </Button>
            )}
          </MetadataContainerRow>
        </>
      )}
      {currentUserIsCoreMember && (
        <>
          <MetadataContainerBreak />
          <MetadataContainerRow
            row={{
              type: 'button',
              props: {
                disabled: sendingMap.has(doc.id),
                spinning: sendingMap.get(doc.id) === 'update',
                id: 'metadata-move',
                label: translate(lngKeys.GeneralMoveVerb),
                iconPath: mdiArrowRight,
                onClick: openMoveForm,
              },
            }}
          />
          <MetadataContainerRow
            row={{
              type: 'button',
              props: {
                disabled: sendingMap.has(doc.id),
                spinning: sendingMap.get(doc.id) === 'delete',
                id: 'metadata-delete',
                label: translate(lngKeys.GeneralDelete),
                iconPath: mdiTrashCanOutline,
                onClick: () => {
                  closeAllModals()
                  return deleteDoc(doc)
                },
              },
            }}
          />
        </>
      )}
    </>
  )
}

export default React.memo(DocContextMenuActions)
