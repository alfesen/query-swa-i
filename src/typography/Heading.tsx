import styled from '@emotion/styled'

const Heading = ({
  semantic,
  text,
}: {
  semantic: 'h1' | 'h2' | 'h3' | 'h4'
  text: string
}) => {
  const H1 = styled.h1`
    text-transform: uppercase;
    font-size: 3.6rem;
    font-weight: 400;
  `
  const H2 = styled.h2`
    font-size: 3rem;
    font-weight: 400;
  `
  const H3 = styled.h3`
    font-size: 2.6rem;
    font-weight: 400;
  `
  const H4 = styled.h4`
    font-size: 2rem;
    font-weight: 400;
  `

  if (semantic === 'h1') {
    return <H1>{text}</H1>
  }
  if (semantic === 'h2') {
    return <H2>{text}</H2>
  }
  if (semantic === 'h3') {
    return <H3>{text}</H3>
  }
  if (semantic === 'h4') {
    return <H4>{text}</H4>
  }
}

export default Heading
