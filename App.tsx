import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { StyledText } from './src/components'

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText big bold>
        RNE CUSTOM OVERLAY MODAL
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
