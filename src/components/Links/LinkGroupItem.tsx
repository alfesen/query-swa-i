import { css } from '@emotion/react'
import Link from './Link'
import Bold from '@Components/typography/Bold'
import Paragraph from '@Components/typography/Paragraph'
import { TLinkGroupItem } from '@Types/typography'

export const LinkGroupItemStyles = css({
  display: 'flex',
  gap: ' 0 1.6rem',
  flexWrap: 'wrap',

  a: {
    display: 'inline-block',
  },
})

const LinkGroupItem = ({ name, paramName, text, ids }: TLinkGroupItem) => {
  const buildParamString = (id: string) => {
    const searchString = location.search
    if (searchString && location.pathname.includes('search')) {
      return (
        location.pathname +
        searchString.replace(/([^&]+)$/, `${paramName}=${id}`)
      )
    }
    return `?${paramName}=${id}`
  }

  return (
    <div css={LinkGroupItemStyles}>
      <Paragraph>
        <Bold>{name}: </Bold>
      </Paragraph>
      {ids.map(id => (
        <Link
          key={crypto.randomUUID()}
          to={buildParamString(id)}
          replace
          text={`${text} ${id}`}
        />
      ))}
    </div>
  )
}

export default LinkGroupItem
