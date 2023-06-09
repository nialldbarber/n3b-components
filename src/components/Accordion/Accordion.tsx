import React, {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Animated, Pressable, View } from 'react-native'

import {
  Container,
  Title,
} from '@n3b/components/Accordion/styles'
import { Text } from '@n3b/components/Text'

type Props = {
  /**
   * @description
   * The children value of the button
   * @example
   * ```tsx
   * <Button>
   *   <Text>Lorem Ipsum...</Text>
   * </Button>
   * ```
   */
  children: ReactNode
  /**
   * We want to create an accordion
   * It could look like this:
   * <Accordion>
   *  <AccordionItem title="Open me">
   *    Hello
   *  </AccordionItem>
   * </Accordion>
   */
}

export default function Accordion({ children }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    0,
  )

  const handlePress = (index: number) => {
    setActiveIndex((prevIndex) =>
      prevIndex === index ? null : index,
    )
  }

  return (
    <Container>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          active: index === activeIndex,
          onPress: () => {
            handlePress(index)
          },
          index,
        }),
      )}
    </Container>
  )
}

type ItemProps = {
  title: string
  active: boolean
  children: ReactNode
  onPress: () => void
}

export function AccordionItem({
  title,
  active,
  children,
  onPress,
}: Partial<ItemProps>) {
  const heightAnimation = useRef(new Animated.Value(1)).current
  const [itemHeight, setItemHeight] = useState<number | null>(
    null,
  )

  const handleLayout = (e: any) => {
    const { height } = e.nativeEvent.layout
    setItemHeight(height)
  }

  const heightStyles = {
    height: heightAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, active ? itemHeight : 0],
    }),
  }

  console.log({ heightStyles, itemHeight })

  return (
    <Pressable onPress={onPress}>
      <Container>
        <Title>
          <Text level="h2">{title}</Text>
        </Title>
        <Animated.View
          onLayout={handleLayout}
          style={heightStyles}
        >
          {children}
        </Animated.View>
      </Container>
    </Pressable>
  )
}
