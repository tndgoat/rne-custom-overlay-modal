import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { StyledText, StyledButton } from './src/components'
import { appColors } from './src/config/theme'

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText style={styles.text} bold>
        RNE CUSTOM OVERLAY MODAL
      </StyledText>
      <StyledButton onPress={() => {}}>Success</StyledButton>
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
