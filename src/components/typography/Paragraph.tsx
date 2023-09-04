import styled from '@emotion/styled'

const Paragraph = ({ text }: { text: string | number }) => {
  const Paragraph = styled.p`
    font-size: 1.6rem;
    margin: .25rem 0;
  `

  return <Paragraph>{text}</Paragraph>
}

export default Paragraph
