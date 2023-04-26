import React, { useEffect, useRef } from 'react'
import { Animated, Easing, ViewProps } from 'react-native'
import type { Size, Variant } from '@olio/types'
import {
  Container,
  Spinner,
} from '@olio/components/LoadingSpinner/styles'

export interface LoadingSpinnerProps extends ViewProps {
  /**
   * @description
   * The defined size of a loading spinner
   * @default standard
   * @example
   * ```tsx
   * <LoadingSpinner size="large" />
   * ```
   */
  size?: Size
  /**
   * @description
   * The colour variant of the loading
   * spinner
   * @default primary
   * @example
   * ```tsx
   * // The default case 👇
   * <LoadingSpinner variant="primary" />
   * <LoadingSpinner variant="secondary" />
   * <LoadingSpinner variant="tertiary" / >
   * ```
   */
  variant?: Variant
}

export default function LoadingSpinner({
  size = 'standard',
  variant = 'primary',
  ...rest
}: LoadingSpinnerProps) {
  const spinningValue = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinningValue, {
        toValue: 1,
        duration: 800,
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
    <Container {...rest}>
      <Spinner
        size={size}
        variant={variant}
        style={{ transform: [{ rotate: spin }] }}
      />
    </Container>
  )
}
