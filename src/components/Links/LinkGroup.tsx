/* eslint-disable no-case-declarations */
import Paragraph from '@Components/typography/Paragraph'
import { TLinkGroup } from '@Types/typography'
import styled from '@emotion/styled'
import Link from './Link'
import LinkGroupItem, { LinkGroupItemStyles } from './LinkGroupItem'

const linkTypes = {
  vehicles: {
    name: 'Vehicles',
    paramName: 'vehicle',
    text: 'Vehicle',
  },
  films: {
    name: 'Films',
    paramName: 'film',
    text: 'Film',
  },
  starships: {
    name: 'Starships',
    paramName: 'starship',
    text: 'Starship',
  },
  residents: {
    name: 'Residents',
    paramName: 'person',
    text: 'Resident',
  },
  people: {
    name: 'Specimens',
    paramName: 'person',
    text: 'Specimen',
  },
  characters: {
    name: 'Characters',
    paramName: 'person',
    text: 'Character',
  },
  pilots: {
    name: 'Pilots',
    paramName: 'person',
    text: 'Pilot',
  },
  planets: {
    name: 'Planets',
    paramName: 'planet',
    text: 'Planet',
  },
  species: {
    name: 'Species',
    paramName: 'species',
    text: 'Species',
  },
}

const LinkGroupComponent = styled.div(LinkGroupItemStyles)
const LinkGroup = (props: TLinkGroup) => {
  const buildParamString = (paramName: string, id: string) => {
    const searchString = location.search
    if (searchString && location.pathname.includes('search')) {
      return (
        location.pathname +
        searchString.replace(/([^&]+)$/, `${paramName}=${id}`)
      )
    }
    return `?${paramName}=${id}`
  }

  if (props.type === 'personData') {
    const { planetId, speciesId } = props
    return (
      <LinkGroupComponent>
        <Paragraph>More info: </Paragraph>
        <Link to={buildParamString('planet', planetId)} text='Home World' />
        <Link to={buildParamString('species', speciesId)} text='Species' />
      </LinkGroupComponent>
    )
  }

  const properties = linkTypes[props.type]

  return <LinkGroupItem ids={props.items} {...properties} />
}

export default LinkGroup
