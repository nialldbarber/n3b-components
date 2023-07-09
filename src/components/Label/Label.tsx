import type { ViewProps } from 'react-native'

import {
  Container,
  LabelText,
} from '@n3b/components/Label/styles'

/**
  type Props = {|
    label: any,
    status: string,
    collected: boolean,
    inLargeCard?: boolean,
  |}
 */

export interface LabelProps extends ViewProps {
  /**
   * @description
   * The text that the label will show
   * @example
   * ```tsx
   * <Label label="Lorem Ipsum..." />
   * ```
   */
  label: string
  /**
   * @description
   * The status of the label. Based on the
   * type provided, the output will show
   * a different design
   * @example
   * ```tsx
   * <Label status="inactive" />
   * ```
   */
  status: string
}

export default function Label({ label, status }: LabelProps) {
  return (
    <Container status={status}>
      <LabelText status={status}>{label}</LabelText>
    </Container>
  )
}
