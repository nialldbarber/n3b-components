import styled from 'styled-components/native'

import { colors } from '@n3b/color/palettes'
import { spacing } from '@n3b/layout/size'

export const Title = styled.View`
  padding: ${spacing['30px']}px;
  border: 1px solid ${colors.core.black};
`

export const Container = styled.View`
  align-self: stretch;
  text-align: left;
`
