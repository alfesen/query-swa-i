import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Paragraph from '../typography/Paragraph'
import { TApparition } from '../../types/typography'

const apparitionStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '.3rem',
  flexWrap: 'wrap',

  '@media screen and (max-width: 992px)': {
    justifyContent: 'left',
    gap: '.5rem',
  },

  '@media screen and (max-width: 768px)': {
    justifyContent: 'left',
    gap: '1rem',
  },
})

const Apparition = ({ gender, eye_color, hair_color }: TApparition) => {
  const Apparition = styled.div(apparitionStyles)

  return (
    <Apparition>
      <Paragraph text={`Gender: ${gender}`} /> <hr />
      <Paragraph text={`Eyes: ${eye_color}`} /> <hr />
      <Paragraph text={`Hair: ${hair_color}`} />
    </Apparition>
  )
}

export default Apparition
