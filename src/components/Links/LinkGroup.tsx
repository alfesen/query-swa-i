/* eslint-disable no-case-declarations */
import Link from '../UI/Link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Paragraph from '../typography/Paragraph'
import { TLinkGroup } from '../../types/typography'

const LinkGroupStyles = css({
  display: 'flex',
  gap: ' 0 1.6rem',
  flexWrap: 'wrap',

  a: {
    display: 'inline-block',
  },
})

const LinkGroup = (props: TLinkGroup) => {
  const LinkGroup = styled.div(LinkGroupStyles)

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
        <LinkGroup>
          <Paragraph>Vehicles: </Paragraph>
          {vehicles.map((vehicleId, index) => (
            <Link to={`?vehicle=${vehicleId}`} text={`Vehicle ${index + 1}`} />
          ))}
        </LinkGroup>
      )
    case 'starships':
      const { starships } = props
      return (
        <LinkGroup>
          <Paragraph>Starships: </Paragraph>
          {starships.map((starshipId, index) => (
            <Link
              to={`?starship=${starshipId}`}
              text={`Starship ${index + 1}`}
            />
          ))}
        </LinkGroup>
      )
    case 'films':
      const { films } = props
      return (
        <LinkGroup>
          <Paragraph>Films: </Paragraph>
          {films.map(filmId => (
            <Link to={`?film=${filmId}`} text={`Film ${filmId}`} />
          ))}
        </LinkGroup>
      )
    case 'residents':
      const { residents } = props
      return (
        <LinkGroup>
          <Paragraph>Residents: </Paragraph>
          {residents.map(residentId => (
            <Link
              to={`?person=${residentId}`}
              text={`Resident ${residentId}`}
            />
          ))}
        </LinkGroup>
      )
    case 'people':
      const { people } = props
      return (
        <LinkGroup>
          <Paragraph>Specimens: </Paragraph>
          {people.map(specimenId => (
            <Link
              to={`?specimen=${specimenId}`}
              text={`Specimen ${specimenId}`}
            />
          ))}
        </LinkGroup>
      )
    default:
      return
  }
}

export default LinkGroup
