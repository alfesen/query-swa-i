import { css } from '@emotion/react'
import DotLoader from 'react-spinners/DotLoader'

const LoadingSpinner = () => {
  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(213, 213, 213, 0.6);
      `}>
      <DotLoader color='#fff' />
    </div>
  )
}

export default LoadingSpinner
