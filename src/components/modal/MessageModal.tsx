import { Modal, Pressable, View, StyleSheet, ActivityIndicator } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import StyledText from '../text/StyledText'
import StyledButton from '../button/StyledButton'
import { appColors } from '../../config/theme'
import { MessageTypes, MessageIconNameType, MessageThemeColorType, MessageModalProps } from './types'

const MessageModal = ({
  messageModalVisible,
  messageType,
  headerText,
  messageText,
  buttonText,
  altButtonText,
  onDismiss,
  onProceed,
  onReject = () => {},
  isLoading,
  isProceeding,
  isRejecting,
}: MessageModalProps) => {
  let messageIconName: MessageIconNameType,
    messageThemeColor: MessageThemeColorType = ''

  switch (messageType) {
    case MessageTypes.SUCCESS:
      messageIconName = 'check'
      messageThemeColor = appColors.success
      break

    case MessageTypes.FAIL:
      messageIconName = 'close'
      messageThemeColor = appColors.fail
      break

    case MessageTypes.WARNING:
      messageIconName = 'alert-circle-outline'
      messageThemeColor = appColors.warning
      break

    case MessageTypes.DECISION:
      messageIconName = 'alert-circle-check-outline'
      messageThemeColor = appColors.decision
      break

    case MessageTypes.DANGEROUS_DECISION:
      messageIconName = 'alert-circle-check-outline'
      messageThemeColor = appColors.fail
      break

    default:
      messageIconName = 'information-variant'
      messageThemeColor = appColors.info
      break
  }

  return (
    <Modal animationType="slide" visible={messageModalVisible} transparent={true}>
      <Pressable style={styles.container} onPress={onDismiss}>
        {isLoading && <ActivityIndicator size={72} color={appColors.white} />}
        {!isLoading && (
          <View style={styles.modal}>
            <View style={[styles.modalIcon, { backgroundColor: messageThemeColor }]}>
              <MaterialCommunityIcons name={messageIconName} size={75} color={appColors.white} />
            </View>
            <View style={styles.modalContent}>
              <StyledText style={styles.headerText} big bold>
                {headerText || 'HEADER'}
              </StyledText>
              <StyledText style={styles.messageText} small>
                {messageText || 'MESSAGE'}
              </StyledText>

              {messageType === MessageTypes.DECISION || messageType === MessageTypes.DANGEROUS_DECISION ? (
                <View style={styles.decisionRow}>
                  <StyledButton onPress={onReject} isLoading={isRejecting} style={styles.decisionButton}>
                    {altButtonText || (
                      <>
                        <MaterialCommunityIcons name="close" size={16} /> NO
                      </>
                    )}
                  </StyledButton>
                  <StyledButton onPress={onProceed} isLoading={isProceeding} style={[styles.decisionButton, { backgroundColor: messageThemeColor }]}>
                    {buttonText || (
                      <>
                        <MaterialCommunityIcons name="check" size={16} /> YES
                      </>
                    )}
                  </StyledButton>
                </View>
              ) : (
                <StyledButton style={{ backgroundColor: messageThemeColor }} onPress={onProceed} isLoading={isProceeding}>
                  {buttonText || 'Okay'}
                </StyledButton>
              )}
            </View>
          </View>
        )}
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modal: {
    backgroundColor: appColors.secondary,
    width: '100%',
    alignItems: 'center',
    paddingTop: 45,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  modalIcon: {
    backgroundColor: appColors.neutral,
    width: 100,
    height: 100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -50,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  modalContent: {
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    textAlign: 'center',
    marginBottom: 10,
  },
  messageText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  decisionRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  decisionButton: {
    width: 'auto',
  },
})

export default MessageModal
