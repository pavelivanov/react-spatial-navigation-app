import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

import 'normalize.css/normalize.css'
import 'assets/styl/index.styl'

import Root from 'containers/Root'





const history = browserHistory

ReactDOM.render(
  <Root>
    <Router history={ history }>
      { routes }
    </Router>
  </Root>,
  document.getElementById('root')
)
