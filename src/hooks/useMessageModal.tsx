import { useState } from 'react'
import { MessageTypes } from '../components'
import { RequiredMessageModalPropsType, ExtraMessageModalPropsType } from './types'

const useMessageModal = () => {
  const [messageModalVisible, setMessageModalVisible] = useState(false)
  const [requiredMessageModalProps, setRequiredMessageModalProps] = useState<RequiredMessageModalPropsType>({
    messageType: MessageTypes.INFO,
    headerText: '',
    messageText: '',
    onDismiss: () => {},
    onProceed: () => {},
  })

  const [extraMessageModalProps, setExtraMessageModalProps] = useState<ExtraMessageModalPropsType | undefined>({})

  const [isLoading, setIsLoading] = useState(false)
  const [isProceeding, setIsProceeding] = useState(false)
  const [isRejecting, setIsRejecting] = useState(false)

  const hideModal = () => {
    setMessageModalVisible(false)
  }

  const showMessageModal = (messageType: MessageTypes, headerText: string, messageText: string, onProceed: () => any, extraProps?: ExtraMessageModalPropsType) => {
    setMessageModalVisible(true)
    setRequiredMessageModalProps({
      messageType,
      headerText,
      messageText,
      onProceed,
      onDismiss: hideModal,
    })
    setExtraMessageModalProps(extraProps)
  }

  const messageModalState = {
    messageModalVisible,
    ...requiredMessageModalProps,
    ...extraMessageModalProps,
    isLoading,
    isProceeding,
    isRejecting,
  }

  return {
    messageModalState,
    showMessageModal,
    hideModal,
    setIsLoading,
    setIsProceeding,
    setIsRejecting,
  }
}

export default useMessageModal
