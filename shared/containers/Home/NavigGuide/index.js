import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class NavigGuide extends React.Component {
  buttons = [
    { name: 'S', title: 'Sidebar' },
    { name: 'F', title: 'Search' },
  ]

  render() {
    return (
      <div styleName="navigGuide">
        {
          this.buttons.map(({ name, title }, index) => (
            <div key={index} styleName="buttonContainer">
              <div key={index} styleName="button">{name}</div>
              <div styleName="buttonTitle">{title}</div>
            </div>
          ))
        }
      </div>
    )
  }
}
