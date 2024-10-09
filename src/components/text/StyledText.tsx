import { Text } from 'react-native'
import { appColors } from '../../config/theme'
import { StyledTextProps } from './types'

const StyledText = ({ children, small, big, bold, style }: StyledTextProps) => {
  return (
    <Text
      style={[
        {
          color: appColors.tint,
          fontSize: small ? 13 : big ? 24 : 16,
          fontWeight: bold ? 'bold' : 'normal',
        },
        style,
      ]}
    >
      {children}
    </Text>
  )
}

export default StyledText
