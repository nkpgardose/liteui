import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/pages/App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import './components/base/Reset'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
