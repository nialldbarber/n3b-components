import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font'
import { Button } from './src/components/Button'

const Div = () => <View style={{ marginVertical: 20 }} />

export default function App() {
  const [loadedFonts] = useFonts({
    'Cosmica-Bold': require('./src/assets/fonts/Cosmica-Bold.otf'),
  })

  if (!loadedFonts) {
    return null
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Button size="large">Hello world!</Button>
        <Div />
        <Button variant="secondary">hello</Button>
        <Div />
        <Button variant="tertiary">hello</Button>
        <Div />
        <Button disabled style={{ flex: 10 }} />
        <Div />
        <Button isLoading />
        <Button isLoading variant="secondary" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    paddingHorizontal: 20,
  },
})
