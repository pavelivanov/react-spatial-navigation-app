import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from 'routes'

import 'normalize.styl'
import 'assets/styl/index.styl'

import Root from 'containers/Root'


import { Keyboard } from 'spatial-navigation'

Keyboard.addToMap([
  { keyCode: 37, name: 'left' },
  { keyCode: 38, name: 'up' },
  { keyCode: 39, name: 'right' },
  { keyCode: 40, name: 'down' },
  { keyCode: 27, name: 'esc' },
  { keyCode: 13, name: 'enter' },
  { keyCode: 9, name: 'tab' }
])


ReactDOM.render(
  <Root>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Root>,
  document.getElementById('root')
)
