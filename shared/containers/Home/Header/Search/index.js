import React from 'react'
import Icon from 'react-fa'
import SNReact from 'react-spatial-navigation'

import CSSModules from 'react-css-modules'
import style from './style'


@SNReact.Decorators.Element({
  keyBindings: [ { keyCode: 70, modifier: 'meta' }, { keyCode: 70 } ]
})
@CSSModules(style)
export default class HeaderSearch extends React.Component {
  render() {
    return (
      <div styleName="search">
        <Icon styleName="icon" name="search" />
        <input placeholder="Search" />
      </div>
    )
  }
}
