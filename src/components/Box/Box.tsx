import React from 'react'
import { View } from 'react-native'

export default function Box({
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  children,
}: any) {
  return <View>{children}</View>
}
