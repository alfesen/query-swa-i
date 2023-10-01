import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Paragraph from '@Components/typography/Paragraph'
import { TPagination } from '@Types/ui'
import { flexCenter } from '@/css/mixins'

const ButtonContainerStyles = css(flexCenter, {
  gap: '2em',
  marginTop: '2.5em'
})

const ButtonStyles = css({
  backgroundColor: 'rgba(236, 148, 75, .4)',
  border: 'none',
  padding: '1em',
  transition: 'color .3s',
  cursor: 'pointer',
  '&:hover': {
    color: 'rgb(236, 148, 75)',
  },
})

const Pagination = ({
  toNextPage,
  toPreviousPage,
  value,
  isNextPage,
}: TPagination) => {
  const ButtonContainer = styled.div(ButtonContainerStyles)
  const Button = styled.button(ButtonStyles)

  return (
    <ButtonContainer>
      {value > 1 && <Button onClick={toPreviousPage}>&larr;</Button>}
      <Paragraph>{value}</Paragraph>
      {isNextPage && <Button onClick={toNextPage}>&rarr;</Button>}
    </ButtonContainer>
  )
}

export default Pagination
