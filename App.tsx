import { useState } from 'react'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { Button } from './src/components/Button'
import { Text } from './src/components/Text'
import { Label } from './src/components/Label'

type RootStackParamList = {
  Home: undefined
  Buttons: undefined
  Labels: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Div = () => <View style={{ marginVertical: 10 }} />
const Btn = ({ children, onPress }: any) => (
  <Pressable
    style={{
      backgroundColor: '#261750',
      padding: 20,
      margin: 20,
      borderRadius: 50,
    }}
    onPress={onPress}
  >
    <Text style={{ color: '#ffffff', alignSelf: 'center' }}>
      {children}
    </Text>
  </Pressable>
)

export default function App() {
  const [loadedFonts] = useFonts({
    'Cosmica-Bold': require('./src/assets/fonts/Cosmica-Bold.otf'),
    'Plus-Jakarta-Sans-Semi-Bold': require('./src/assets/fonts/PlusJakartaSans-SemiBold.ttf'),
  })

  if (!loadedFonts) {
    return null
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Buttons" component={ButtonScreen} />
        <Stack.Screen name="Labels" component={LabelScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <Btn onPress={() => navigation.navigate('Buttons')}>
        Buttons
      </Btn>
      <Btn onPress={() => navigation.navigate('Labels')}>
        Labels
      </Btn>
    </ScrollView>
  )
}

const ButtonScreen = () => {
  const [loading, setLoading] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Buttons</Text>
        <Button>Hello world!</Button>
        <Div />
        <Button size="contain">Hello world!</Button>
        <Div />
        <Button size="contain" align="right">
          Hello world!
        </Button>
        <Div />
        <Button variant="secondary">Hello world!</Button>
        <Div />
        <Button variant="tertiary">Hello world!</Button>
        <Div />
        <Button
          isLoading={loading}
          onPress={() => setLoading(!loading)}
        >
          hello
        </Button>
      </View>
    </ScrollView>
  )
}

const LabelScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Labels</Text>
        <Label status="success" label="Success!" />
        <Div />
        <Label status="alert" label="Alert!" />
        <Div />
        <Label status="error" label="Error!" />
        <Div />
        <Label status="warning" label="Warning!" />
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
    padding: 20,
  },
})
