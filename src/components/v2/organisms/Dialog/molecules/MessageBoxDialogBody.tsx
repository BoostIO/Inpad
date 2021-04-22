import React, { useRef } from 'react'
import { useEffectOnce } from 'react-use'
import { MessageBoxButtonProps } from '../../../../../shared/lib/stores/dialog'
import styled from '../../../../../shared/lib/styled'
import Button from '../../../../../shared/components/atoms/Button'
import LeftToRightList from '../../../../../shared/components/atoms/LeftRightList'

type MessageBoxDialogProps = {
  buttons?: MessageBoxButtonProps[]
  closeDialog: () => void
}

const MessageBoxDialogBody = ({
  buttons,
  closeDialog,
}: MessageBoxDialogProps) => {
  const buttonRefs = useRef<HTMLButtonElement[]>([])

  useEffectOnce(() => {
    const focusedButtonIndex = (buttons || []).findIndex(
      (button) => button.defaultButton
    )

    if (focusedButtonIndex >= 0) {
      buttonRefs.current[focusedButtonIndex].focus()
    }
  })

  const handleBodyKeyDown = (event: KeyboardEvent) => {
    switch (event.key.toLowerCase()) {
      case 'escape':
        const cancelButtonIndex = (buttons || []).findIndex(
          (button) => button.cancelButton
        )
        if (cancelButtonIndex >= 0) {
          buttonRefs.current[cancelButtonIndex].click()
          return
        }
        closeDialog()
        break
      default:
        return
    }
  }

  return (
    <Container onKeyDown={handleBodyKeyDown}>
      <LeftToRightList>
        {buttons == null ? (
          <Button variant='secondary' onClick={closeDialog}>
            Close
          </Button>
        ) : (
          buttons.map((button, index) => (
            <Button
              variant={button.variant}
              key={`dialog__${button.id}__${index}`}
              id={`dialog__${button.id}__${index}`}
              onClick={(event) => {
                if (button.onClick != null) {
                  button.onClick(event)
                }
                closeDialog()
              }}
              ref={(el: any) => (buttonRefs.current[index] = el)}
              className={button.className}
            >
              {button.label}
            </Button>
          ))
        )}
      </LeftToRightList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`

export default MessageBoxDialogBody
