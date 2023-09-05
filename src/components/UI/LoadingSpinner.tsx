import { css } from '@emotion/react'
import styled from '@emotion/styled'
import DotLoader from 'react-spinners/DotLoader'
import { overlayBase } from '../../css/mixins'
import { TSpinner } from '../../types/ui'

const spinnerBackdropStyles = css(overlayBase, {
  backgroundColor: 'rgba(213, 213, 213, 0.6)',
  zIndex: '300',
})

const LoadingSpinner = ({ color }: TSpinner) => {
  const SpinnerBackdrop = styled.div(spinnerBackdropStyles)
  const content = (
    <SpinnerBackdrop>
      <DotLoader color={color} />
    </SpinnerBackdrop>
  )
  return content
}

export default LoadingSpinner
