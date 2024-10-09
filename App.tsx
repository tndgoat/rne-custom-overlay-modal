import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { StyledText, StyledButton, MessageModal, MessageTypes } from './src/components'
import { appColors } from './src/config/theme'
import { useMessageModal } from './src/hooks'

export default function App() {
  const { messageModalState, showMessageModal, hideModal } = useMessageModal()
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
