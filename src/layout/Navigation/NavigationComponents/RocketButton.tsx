import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { TRocketButton } from '@/types/ui'

const RocketButtonStyles = css({
  zIndex: '301',
  fontSize: '2rem',
  filter: 'brightness(0) invert(1)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})

const RocketButtonElement = styled.button(RocketButtonStyles)

export const RocketButton = ({ onClick, active }: TRocketButton) => (
  <RocketButtonElement
    css={css({
      transition: 'rotate .4s',
      rotate: !active ? '0deg' : '180deg',
    })}
    onClick={onClick}>
    🚀
  </RocketButtonElement>
)
