import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { StyledText, StyledButton, MessageModal, MessageTypes } from './src/components'
import { appColors } from './src/config/theme'

export type RequiredMessageModalPropsType = {
  messageType: MessageTypes
  headerText: string
  messageText: string
  onDismiss: () => any
  onProceed: () => any
}
export type ExtraMessageModalPropsType = {
  buttonText?: string
  altButtonText?: string
  onDismiss?: () => any
  onReject?: () => any
}

export default function App() {
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

  const handleProceed = () => {
    console.log('Proceeding')
    hideModal()
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.text} bold>
        RNE CUSTOM OVERLAY MODAL
      </StyledText>
      <StyledButton
        onPress={() => {
          showMessageModal(MessageTypes.SUCCESS, 'SUCCESS', 'SUCCESS MESSAGE', handleProceed)
        }}
      >
        SUCCESS MODAL
      </StyledButton>
      <MessageModal {...messageModalState} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
  },
})
