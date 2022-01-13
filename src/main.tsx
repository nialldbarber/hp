import {StrictMode} from 'react'

import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from 'src/App'

import 'src/styles/global.css'

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
