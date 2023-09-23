import { css } from '@emotion/react'

export const flexCenter = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const overlayBase = css(flexCenter, {
  position: 'absolute',
  width: '100%',
  left: '0',
  top: '0',
  right: '0',
  bottom: '0',
})
