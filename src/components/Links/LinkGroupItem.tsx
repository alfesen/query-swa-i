import { css } from '@emotion/react'
import Link from '../UI/Link'
import Bold from '../typography/Bold'
import Paragraph from '../typography/Paragraph'
import { TLinkGroupItem } from '../../types/typography'

export const LinkGroupItemStyles = css({
  display: 'flex',
  gap: ' 0 1.6rem',
  flexWrap: 'wrap',

  a: {
    display: 'inline-block',
  },
})

const LinkGroupItem = ({ name, paramName, text, ids }: TLinkGroupItem) => {
  return (
    <div css={LinkGroupItemStyles}>
      <Paragraph>
        <Bold>{name}: </Bold>
      </Paragraph>
      {ids.map(id => (
        <Link to={`?${paramName}=${id}`} text={`${text} ${id}`} />
      ))}
    </div>
  )
}

export default LinkGroupItem
