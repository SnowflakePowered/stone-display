import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { MuiThemeProvider } from 'material-ui/styles'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
    document.getElementById('root'))
registerServiceWorker()
