import React from 'react'
import CSSModules from 'react-css-modules'
import style from './style'


export default CSSModules((props) => (
  <div styleName="container">
    <div styleName="content">
      {props.children}
    </div>
  </div>
), style)
