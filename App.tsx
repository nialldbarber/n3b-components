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
        <Text>
          Open up App.tsx to start working on your app!
        </Text>
        <Button text="hello world!" size="xlarge" />
        <Div />
        <Button text="hello world!" size="medium" />
        <Div />
        <Button text="hello world!" size="large" />
        <Div />
        <Button text="hello world!" />
        <Div />
        <Button text="hello" variant="secondary" />
        <Div />
        <Button text="hello" variant="tertiary" />
        <Div />
        <Button disabled style={{ flex: 10 }} />
        <Div />
        <Button isLoading />
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
