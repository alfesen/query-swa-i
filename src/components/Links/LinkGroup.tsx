/* eslint-disable no-case-declarations */
import Link from '../Links/Link'
import Paragraph from '../typography/Paragraph'
import LinkGroupItem from './LinkGroupItem'
import { LinkGroupItemStyles } from './LinkGroupItem'
import { TLinkGroup } from '../../types/typography'
import styled from '@emotion/styled'

const LinkGroup = (props: TLinkGroup) => {
  const LinkGroupWrapper = styled.div(LinkGroupItemStyles)

  switch (props.type) {
    case 'personData':
      const { planetId, speciesId } = props
      return (
        <LinkGroupWrapper>
          <Paragraph>More info: </Paragraph>
          <Link to={`?planet=${planetId}`} text='Home World' />
          <Link to={`?species=${speciesId}`} text='Species' />
        </LinkGroupWrapper>
      )
    case 'vehicles':
    case 'starships':
    case 'films':
    case 'residents':
    case 'people':
      const { items, type } = props
      return (
        <LinkGroupItem
          name={
            type === 'people'
              ? 'Specimens'
              : type.charAt(0).toUpperCase() + type.slice(1)
          }
          ids={items}
          paramName={type === 'people' ? 'person' : type}
          text={
            type === 'people'
              ? 'Specimen'
              : type.charAt(0).toUpperCase() + type.slice(1)
          }
        />
      )
    default:
      return null
  }
}

export default LinkGroup
