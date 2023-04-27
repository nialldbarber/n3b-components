import styled, { css } from 'styled-components/native'
import type { LabelProps } from '@olio/components/Label/Label'
import { Text } from '@olio/components/Text'
import { colors } from '@olio/color/palettes'
import type { System } from '@olio/color/palettes'
import { createStrictStyles } from '@olio/helpers'
import { fontSizes } from '@olio/typography/font-sizes'

const labelBackground = createStrictStyles<System>({
  success: css`
    background-color: ${colors.system.success};
  `,
  warning: css`
    background-color: ${colors.system.warning};
  `,
  error: css`
    background-color: ${colors.system.error};
  `,
  alert: css`
    background-color: ${colors.system.alert};
  `,
})

const labelText = createStrictStyles<System>({
  success: css`
    color: ${colors.core.white};
  `,
  warning: css`
    color: ${colors.core.white};
  `,
  error: css`
    color: ${colors.core.white};
  `,
  alert: css`
    color: ${colors.core.black};
  `,
})

type ContainerProps = Pick<LabelProps, 'status'>

export const Container = styled.View<ContainerProps>`
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  ${({ status }) => labelBackground[status as System]};
`

export const LabelText = styled(Text)<ContainerProps>`
  font-family: 'Plus-Jakarta-Sans-Semi-Bold';
  font-size: ${fontSizes['14px']}px;
  ${({ status }) => labelText[status as System]};
`
