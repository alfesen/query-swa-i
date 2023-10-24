import { css } from '@emotion/react'
import styled from '@emotion/styled'
import DotLoader from 'react-spinners/DotLoader'
import { overlayBase } from '@/css/mixins'
import { TSpinner } from '@Types/ui'

const spinnerBackdropStyles = css(overlayBase, {
  position: 'fixed',
  backgroundColor: 'rgba(213, 213, 213, 0.6)',
  zIndex: '300',
  userSelect: 'none',
})

const SpinnerBackdrop = styled.div(spinnerBackdropStyles)

const LoadingSpinner = ({ color }: TSpinner) => {
  const content = (
    <SpinnerBackdrop>
      <DotLoader color={color} />
    </SpinnerBackdrop>
  )
  return content
}

export default LoadingSpinner
