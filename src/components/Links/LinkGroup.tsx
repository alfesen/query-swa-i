/* eslint-disable no-case-declarations */
import Link from '../UI/Link'
import styled from '@emotion/styled'
import Paragraph from '../typography/Paragraph'
import { TLinkGroup } from '../../types/typography'
import LinkGroupItem from './LinkGroupItem'
import { LinkGroupItemStyles } from './LinkGroupItem'

const LinkGroup = (props: TLinkGroup) => {
  const LinkGroup = styled.div(LinkGroupItemStyles)

  switch (props.type) {
    case 'personData':
      const { planetId, speciesId } = props
      return (
        <LinkGroup>
          <Paragraph>More info: </Paragraph>
          <Link to={`?planet=${planetId}`} text='Home World' />
          <Link to={`?species=${speciesId}`} text='Species' />
        </LinkGroup>
      )
    case 'vehicles':
      const { vehicles } = props
      return (
        <LinkGroupItem
          ids={vehicles}
          name='Vehicles'
          paramName='vehicle'
          text='Vehicle'
        />
      )
    case 'starships':
      const { starships } = props
      return (
        <LinkGroupItem
          name='Starships'
          ids={starships}
          paramName='starship'
          text='Starship'
        />
      )
    case 'films':
      const { films } = props
      return (
        <LinkGroupItem name='Films' ids={films} paramName='film' text='Film' />
      )
    case 'residents':
      const { residents } = props
      return (
        <LinkGroupItem
          name='Residents'
          ids={residents}
          paramName='resident'
          text='Resident'
        />
      )
    case 'people':
      const { people } = props
      return (
        <LinkGroupItem
          name='Specimens'
          ids={people}
          paramName='person'
          text='Specimens'
        />
      )
    default:
      return
  }
}

export default LinkGroup
