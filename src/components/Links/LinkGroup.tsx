/* eslint-disable no-case-declarations */
import { useLocation } from 'react-router-dom'
import Link from '../UI/Link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Paragraph from '../typography/Paragraph'
import { TLinkGroup } from '../../types/ui'

const LinkGroupStyles = css({
  display: 'flex',
  gap: '1.6rem',
  a: { display: 'inline-block' },
})

const LinkGroup = (props: TLinkGroup) => {
  const { search: searchParams } = useLocation()

  const LinkGroup = styled.div(LinkGroupStyles)

  switch (props.type) {
    case 'personData':
      const { planetId, speciesId } = props
      return (
        <LinkGroup>
          <Paragraph>More info: </Paragraph>
          <Link to={`${searchParams}&planet=${planetId}`} text='Home World' />
          <Link to={`${searchParams}&species=${speciesId}`} text='Species' />
        </LinkGroup>
      )
    case 'vehicles':
      const { vehicles } = props
      return (
        <LinkGroup>
          <Paragraph>Vehicles: </Paragraph>
          {vehicles.map((vehicleId, index) => (
            <Link
              to={`${searchParams}&vehicle=${vehicleId}`}
              text={`Vehicle ${index + 1}`}
            />
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
              to={`${searchParams}&starship=${starshipId}`}
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
            <Link
              to={`${searchParams}&film=${filmId}`}
              text={`Film ${filmId}`}
            />
          ))}
        </LinkGroup>
      )
    default:
      return
  }
}

export default LinkGroup
