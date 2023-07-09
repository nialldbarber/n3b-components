import React from 'react'
import type { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

import { Container } from '@n3b/helpers/DebugLayout/styles'

export default function DebugLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <View>
      <Container style={{ ...StyleSheet.absoluteFillObject }} />
      {children}
    </View>
  )
}
