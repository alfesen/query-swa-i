import FullData from './FullData'
import { flexCenter } from '../../css/mixins'
import styled from '@emotion/styled'
import { TError } from '../../types/ui'

const ItemNotFound = ({ error }: TError) => {
  const { detail } = error?.response?.data as { detail: string }

  const Error = styled.h3(flexCenter, {
    color: '#dc3545',
    padding: '3rem 0',
    fontSize: '2.6rem',
  })

  return (
    <FullData>
      <Error>Error: {detail}</Error>
    </FullData>
  )
}

export default ItemNotFound
