import React, { ReactNode, useState } from 'react'
import { Pressable, View } from 'react-native'

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
   *  <Accordion.Item title="Open me">
   *    Hello
   *  </Accordion.Item>
   * </Accordion>
   */
}

/**
 * one item needs to be open
 * by default, this should be
 * the first one
 */

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
    <View>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child as React.ReactElement, {
          active: index === activeIndex,
          onPress: () => {
            handlePress(index)
            console.log(
              'index === activeIndex',
              index === activeIndex,
            )
          },
          index,
        }),
      )}
    </View>
  )
}

type ItemProps = {
  title?: string
  active?: boolean
  children?: ReactNode
  onPress?: () => void
}

export function AccordionItem({
  title,
  active,
  children,
  onPress,
}: ItemProps) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text level="h2">{title}</Text>
        {active && <View>{children}</View>}
      </View>
    </Pressable>
  )
}
