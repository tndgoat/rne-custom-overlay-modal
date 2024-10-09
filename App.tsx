import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { StyledText, StyledButton, MessageModal, MessageTypes } from './src/components'
import { appColors } from './src/config/theme'
import { useMessageModal } from './src/hooks'

export default function App() {
  const { messageModalState, showMessageModal, hideModal, setIsLoading, setIsProceeding, setIsRejecting } = useMessageModal()

  const handleProceed = () => {
    setIsProceeding(true)
    console.log('Proceeding')
    setTimeout(() => {
      setIsProceeding(false)
      hideModal()
    }, 2024)
  }

  const handleDismiss = () => {
    console.log('Dismissing')
    hideModal()
  }

  const handleReject = () => {
    setIsRejecting(true)
    console.log('Rejecting')
    setTimeout(() => {
      setIsRejecting(false)
      hideModal()
    }, 2024)
  }

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2024)
  }, [])

  return (
    <View style={styles.container}>
      <StyledText style={styles.text} bold>
        RNE CUSTOM OVERLAY MODAL
      </StyledText>
      <StyledButton
        style={{ backgroundColor: appColors.success, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.SUCCESS, 'SUCCESS', 'SUCCESS MESSAGE', handleProceed, {
            buttonText: 'Continue',
            onDismiss: handleDismiss,
          })
        }}
      >
        SUCCESS MODAL
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: appColors.fail, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.FAIL, 'FAIL', 'FAIL MESSAGE', handleProceed, {
            buttonText: 'Continue',
            onDismiss: handleDismiss,
          })
        }}
      >
        FAIL MODAL
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: appColors.warning, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.WARNING, 'WARNING', 'WARNING MESSAGE', handleProceed, {
            buttonText: 'Continue',
            onDismiss: handleDismiss,
          })
        }}
      >
        WARNING MODAL
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: appColors.decision, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.DECISION, 'DECISION', 'DECISION MESSAGE', handleProceed, {
            buttonText: 'Confirm',
            altButtonText: 'Cancel',
            onDismiss: handleDismiss,
            onReject: handleReject,
          })
        }}
      >
        DECISION MODAL
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: appColors.fail, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.DANGEROUS_DECISION, 'DANGEROUS DECISION', 'DANGEROUS DECISION MESSAGE', handleProceed, {
            buttonText: 'Confirm',
            altButtonText: 'Cancel',
            onDismiss: handleDismiss,
            onReject: handleReject,
          })
        }}
      >
        DANGEROUS DECISION MODAL
      </StyledButton>
      <StyledButton
        style={{ backgroundColor: appColors.info, marginBottom: 20 }}
        onPress={() => {
          showMessageModal(MessageTypes.INFO, 'INFO', 'INFO MESSAGE', handleProceed, {
            buttonText: 'Continue',
            onDismiss: handleDismiss,
          })
        }}
      >
        INFO MODAL
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
