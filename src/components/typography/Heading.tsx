import styled from '@emotion/styled'
import { THeading } from '@Types/typography'
import { css } from '@emotion/react'

const marginBottom = '1rem'

const h1Styles = css({
  textTransform: 'uppercase',
  fontSize: '3.6rem',
})
const h2Styles = css({ fontSize: '3rem', marginBottom })
const h3Styles = css({ fontSize: '2.6rem', marginBottom })
const h4Styles = css({ fontSize: '2rem', marginBottom })

const H1 = styled.h1(h1Styles)
const H2 = styled.h2(h2Styles)
const H3 = styled.h3(h3Styles)
const H4 = styled.h4(h4Styles)

const Heading = ({ semantic, text }: THeading) => {

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
