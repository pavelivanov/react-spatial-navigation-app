import React from 'react'
import Icon from 'react-fa'
import SNReact from 'react-spatial-navigation'

import CSSModules from 'react-css-modules'
import style from './style'


@SNReact.Decorators.Element()
@CSSModules(style, { allowMultiple: true })
export default class SidebarNavigItem extends React.Component {
  render() {
    const { title, link, icon } = this.props

    return (
      <div ref="element" styleName="item">
        <Icon styleName="icon" name={icon} />
        <span styleName="title">{title}</span>
      </div>
    )
  }
}
