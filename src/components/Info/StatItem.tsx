import { css } from '@emotion/react'
import Bold from '../typography/Bold'
import Paragraph from '../typography/Paragraph'
import { TStatItem } from '../../types/typography'

const StatItem = ({ name, value, spaces, block }: TStatItem) => {
  const nbsp = <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

  return (
    <Paragraph
      css={css`
        width: ${block && '100%'};
      `}>
      <Bold>{name}: </Bold>
      {value} {spaces && nbsp}
    </Paragraph>
  )
}

export default StatItem
