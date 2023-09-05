import { TStats } from '../../types/typography'
import Paragraph from '../typography/Paragraph'

const Stats = (props: TStats) => {
  if (props.type === 'person') {
    const { height, mass, birth_year } = props.person
    return (
      <Paragraph>{`H: ${height}cm | M: ${mass}kg | BY: ${birth_year}`}</Paragraph>
    )
  }
}

export default Stats
