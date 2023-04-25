import React, { useEffect, useRef } from 'react'
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  ViewProps,
} from 'react-native'
import type { Size } from '@olio/types'

export interface LoadingSpinnerProps extends ViewProps {
  /**
   * @description
   * The defined size of a button: a button will
   * always span the width of it's available space
   * (unless overriden). Defining the size will
   * also affect the size of the button text
   * @default standard
   * @example
   * ```tsx
   * <Button size="large" />
   * ```
   */
  size?: Size
}

export default function LoadingSpinner({
  size = 'standard',
}: LoadingSpinnerProps) {
  const spinningValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinningValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }, [])

  const spin = spinningValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ rotate: spin }] },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: 'blue',
    borderLeftColor: 'transparent',
  },
})
