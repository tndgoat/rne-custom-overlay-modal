import { MessageTypes } from '../components'

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
