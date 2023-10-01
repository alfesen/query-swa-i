import { css } from '@emotion/react'
import Bold from '@Components/typography/Bold'
import Paragraph from '@Components/typography/Paragraph'
import { TStatItem } from '@Types/typography'
import { Fragment } from 'react'

const StatItem = ({ stats, block }: TStatItem) => {
  const nbsp = <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>

  const render = Array.isArray(stats) ? (
    stats.map(({ name, value, spaces }) => {
      return (
        <Fragment key={crypto.randomUUID()}>
          <Bold>{name}: </Bold>
          {value} {spaces && nbsp}
        </Fragment>
      )
    })
  ) : (
    <Fragment>
      <Bold>{stats.name}: </Bold>
      {stats.value} {stats.spaces && nbsp}
    </Fragment>
  )

  return (
    <Paragraph
      css={css`
        width: ${block && '100%'};
      `}>
      {render}
    </Paragraph>
  )
}

export default StatItem
