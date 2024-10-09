import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import StyledText from '../text/StyledText'
import { appColors } from '../../config/theme'
import { StyledButtonProps } from './types'

const StyledButton = ({ children, style, textStyle, isLoading, disabled, onPress }: StyledButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={disabled || isLoading}>
      <StyledText style={[styles.text, textStyle]}>{isLoading ? <ActivityIndicator size={'small'} color={appColors.white} /> : children}</StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.neutral,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: appColors.white,
  },
})

export default StyledButton
