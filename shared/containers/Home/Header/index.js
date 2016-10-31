import React from 'react'

import CSSModules from 'react-css-modules'
import SNReact from 'react-spatial-navigation'
import style from './style'

import Search from './Search'


@SNReact.Decorators.Container('Search', {
  map: { left: 'Sidebar', down: 'Content' },
})
@CSSModules(style)
export default class Header extends React.Component {
  render() {
    return (
      <div styleName="header">
        <Search/>
      </div>
    )
  }
}
