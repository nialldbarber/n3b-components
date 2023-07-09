import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'

import { Accordion } from './src/components/Accordion'
import { Button } from './src/components/Button'
import { Column } from './src/components/Column'
import { Label } from './src/components/Label'
import { Row } from './src/components/Row'
import { Text } from './src/components/Text'

const DebugLayout = ({ children }: any) => {
  return (
    <View>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'rgba(255, 0, 0, 0.1)',
          borderColor: 'red',
          borderWidth: 1,
        }}
      />
      {children}
    </View>
  )
}

type RootStackParamList = {
  Home: undefined
  Buttons: undefined
  Labels: undefined
  Accordion: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Div = () => <View style={{ marginVertical: 10 }} />
const Btn = ({ children, onPress }: any) => (
  <Pressable
    style={{
      backgroundColor: '#374259',
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
        <Stack.Screen
          name="Accordion"
          component={AccordionScreen}
        />
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
      <Btn onPress={() => navigation.navigate('Accordion')}>
        Accordion
      </Btn>
    </ScrollView>
  )
}

const ButtonScreen = () => {
  const [loading, setLoading] = useState(false)

  return (
    <ScrollView>
      <View>
        <Text>Buttons</Text>
        <Column space={{ outer: 20, gutter: 15 }}>
          <Button accessibilityHint="Poop">Hello world!</Button>
          <Button size="contain" accessibilityHint="Poop">
            Hello world!
          </Button>
          <Button
            size="contain"
            align="right"
            accessibilityHint="Poop"
          >
            Hello world!
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            Hello world!
          </Button>
          <Button variant="tertiary" accessibilityHint="Poop">
            Hello world!
          </Button>
          <Button
            isLoading={loading}
            onPress={() => setLoading(!loading)}
            accessibilityHint="Poop"
          >
            hello
          </Button>
        </Column>
        <Row
          space={{ outer: 20 }}
          verticalAlign="bottom"
          horizontalAlign="right"
        >
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
        </Row>
        <Row
          space={{ outer: 20 }}
          verticalAlign="top"
          horizontalAlign="left"
        >
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
        </Row>
        <Row
          space={{ outer: 20 }}
          verticalAlign="center"
          horizontalAlign="center"
        >
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
          <Button variant="secondary" accessibilityHint="Poop">
            H
          </Button>
        </Row>
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

const AccordionScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Labels</Text>
        <Accordion />
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
