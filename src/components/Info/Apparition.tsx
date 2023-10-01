import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TApparition } from '@Types/typography'
import StatItem from './StatItem'

const apparitionStyles = css({
  display: 'flex',
  justifyContent: 'left',
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

const Apparition = ({
  gender,
  eye_color,
  hair_color,
  skin_color,
}: TApparition) => {
  const Apparition = styled.div(apparitionStyles)

  return (
    <Apparition>
      {gender && (
        <StatItem stats={{ name: 'Gender', value: gender, spaces: true }} />
      )}
      <StatItem stats={{ name: 'Eyes', value: eye_color, spaces: true }} />
      <StatItem stats={{ name: 'Hair', value: hair_color }} />
      {skin_color && (
        <StatItem stats={{ name: 'Skin', value: skin_color }} block />
      )}
    </Apparition>
  )
}

export default Apparition
