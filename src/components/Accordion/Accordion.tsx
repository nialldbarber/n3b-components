import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

type AccordionItemProps = {
  title: string
  children: React.ReactNode
}

type AccordionProps = {
  children: React.ReactElement<AccordionItemProps>[]
}

export const AccordionItem = ({
  title,
  children,
}: AccordionItemProps) => {
  const [open, setOpen] = useState(false)
  const bodySectionHeight = useState<number | null>(null)[0]

  const bodyHeight = useState(
    new Animated.Value(0),
  )[0].interpolate({
    inputRange: [0, 1],
    outputRange: [0, bodySectionHeight],
  })

  const arrowAngle = useState(
    new Animated.Value(0),
  )[0].interpolate({
    inputRange: [0, 1],
    outputRange: ['0rad', `${Math.PI}rad`],
  })

  const toggleListItem = () => {
    setOpen(!open)
  }

  React.useEffect(() => {
    const animatedController = open
      ? Animated.timing(bodyHeight, {
          toValue: 1,
          duration: 300,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        })
      : Animated.timing(bodyHeight, {
          toValue: 0,
          duration: 300,
          easing: Easing.bezier(0.4, 0.0, 0.2, 1),
          useNativeDriver: false,
        })

    animatedController.start()
  }, [open, bodyHeight])

  return (
    <>
      <TouchableWithoutFeedback onPress={() => toggleListItem()}>
        <View style={styles.titleContainer}>
          <Text>{title}</Text>
          <Animated.View
            style={{ transform: [{ rotateZ: arrowAngle }] }}
          >
            <MaterialIcons
              name="keyboard-arrow-down"
              size={20}
              color="black"
            />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[styles.bodyBackground, { height: bodyHeight }]}
      >
        <View
          style={styles.bodyContainer}
          onLayout={(event) => {
            const { height } = event.nativeEvent.layout
            bodySectionHeight(height)
          }}
        >
          {children}
        </View>
      </Animated.View>
    </>
  )
}

export const Accordion = ({ children }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    null,
  )

  return (
    <View>
      {children.map((child, index) =>
        React.cloneElement(child, {
          key: index,
          onPress: () => setActiveIndex(index),
          active: index === activeIndex,
        }),
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  bodyBackground: {
    backgroundColor: '#EFEFEF',
    overflow: 'hidden',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#EFEFEF',
  },
  bodyContainer: {
    padding: 16,
    paddingLeft: 24,
    position: 'absolute',
    bottom: 0,
  },
})

export default Accordion
