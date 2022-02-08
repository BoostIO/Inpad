import { lngKeys } from '../../lib/i18n/types'
import {
  mdiContentDuplicate,
  mdiDotsVertical,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from '@mdi/js'
import React, { useCallback, useState } from 'react'
import { SerializedDocWithSupplemental } from '../../interfaces/db/doc'
import { useCloudApi } from '../../lib/hooks/useCloudApi'
import { useI18n } from '../../lib/hooks/useI18n'
import {
  MenuItem,
  MenuTypes,
  useContextMenu,
} from '../../../design/lib/stores/contextMenu'
import Icon from '../../../design/components/atoms/Icon'
import styled from '../../../design/lib/styled'
import EditableInput from '../../../design/components/atoms/EditableInput'
import { SerializedTeam } from '../../interfaces/db/team'
import { prepareDocPropsForAPI } from '../../lib/props'
import { GetDocResponseBody } from '../../api/teams/docs'
import { getDocContent } from '../../lib/utils/patterns'
import { BulkApiActionRes } from '../../../design/lib/hooks/useBulkApi'

interface ItemProps {
  doc: SerializedDocWithSupplemental
  children?: React.ReactNode
}

const EditableDocItemContainer = ({ doc, children }: ItemProps) => {
  const [editingItemTitle, setEditingItemTitle] = useState<boolean>(false)
  const [showingContextMenuActions, setShowingContextMenuActions] =
    useState<boolean>(false)

  const {
    createDoc,
    updateDoc,
    deleteDocApi,
    getUpdatedDocApi,
    sendingMap,
  } = useCloudApi()
  const { translate } = useI18n()
  const { popup } = useContextMenu()

  const updateDocTitle = useCallback(
    async (doc, newTitle) => {
      await updateDoc(doc, {
        workspaceId: doc.workspaceId,
        parentFolderId: doc.parentFolderId,
        title: newTitle,
      })
      setEditingItemTitle(false)
    },
    [updateDoc]
  )

  const onDocDuplicate = useCallback(
    async (doc) => {
      const res: BulkApiActionRes<GetDocResponseBody> = await getUpdatedDocApi(
        doc
      )
      if (res.err) {
        return
      }

      const newProps = prepareDocPropsForAPI(doc.props)
      await createDoc(
        { id: doc.teamId } as SerializedTeam,
        {
          workspaceId: doc.workspaceId,
          parentFolderId: doc.parentFolderId,
          emoji: doc.emoji,
          title: doc.title,
          content: getDocContent(res.data.doc),
          props: newProps,
        },
        {
          skipRedirect: true,
        }
      )
    },
    [createDoc, getUpdatedDocApi]
  )

  const openActionMenu: (
    event: React.MouseEvent<HTMLDivElement>,
    doc: SerializedDocWithSupplemental
  ) => void = useCallback(
    (
      event: React.MouseEvent<HTMLDivElement>,
      doc: SerializedDocWithSupplemental
    ) => {
      const editTitleAction: MenuItem = {
        icon: <Icon path={mdiPencilOutline} />,
        type: MenuTypes.Normal,
        label: translate(lngKeys.GeneralEditTitle),
        onClick: () => setEditingItemTitle(true),
      }
      const duplicateAction: MenuItem = {
        icon: <Icon path={mdiContentDuplicate} />,
        type: MenuTypes.Normal,
        label: translate(lngKeys.GeneralDuplicate),
        onClick: () => onDocDuplicate(doc),
      }
      const deleteDocAction: MenuItem = {
        icon: <Icon path={mdiTrashCanOutline} />,
        type: MenuTypes.Normal,
        label: translate(lngKeys.GeneralDelete),
        onClick: () => deleteDocApi({ id: doc.id, teamId: doc.teamId }),
      }
      const actions: MenuItem[] = [
        editTitleAction,
        duplicateAction,
        deleteDocAction,
      ]

      event.preventDefault()
      event.stopPropagation()
      popup(event, actions)
    },
    [deleteDocApi, popup, translate, onDocDuplicate]
  )

  const showInput = !sendingMap.has(doc.id) && editingItemTitle
  return (
    <ItemContainer
      onMouseEnter={() => setShowingContextMenuActions(true)}
      onMouseLeave={() => setShowingContextMenuActions(false)}
    >
      {showInput && (
        <EditableInput
          editOnStart={true}
          placeholder={'Title...'}
          text={doc.title}
          onTextChange={(newText) => updateDocTitle(doc, newText)}
          onBlur={() => setEditingItemTitle(false)}
        />
      )}

      {!showInput && <>{children}</>}

      {showingContextMenuActions && (
        <div className={'item__container__item__actions'}>
          <div
            onClick={(event) => openActionMenu(event, doc)}
            className='doc__action'
          >
            <Icon size={20} path={mdiDotsVertical} />
          </div>
        </div>
      )}
    </ItemContainer>
  )
}

const ItemContainer = styled.div`
  position: relative;

  .item__container__item__actions {
    position: absolute;
    right: 5px;
    z-index: 1;
    margin: 0;
    top: 50%;
    transform: translate(-50%, -50%);

    .doc__action {
      width: 20px;
      height: 20px;
    }
  }
`

export default EditableDocItemContainer
