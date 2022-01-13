import {globalStyle} from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
})

globalStyle('html, body', {
  boxSizing: 'border-box',
  fontFamily: `-apple-system, 'Droid Sans', 'Helvetica Neue', sans-serif`,
  padding: 0,
  margin: 0,
  height: '100%',
})

globalStyle('#root', {
  height: '100%',
})
