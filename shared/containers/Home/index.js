import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import NavigGuide from './NavigGuide'
import Header from './Header'
import Sidebar from './Sidebar'
import Content from './Content'


@CSSModules(style)
export default class Home extends React.Component {
  render() {
    return (
      <div styleName="wrapper">
        <NavigGuide />
        <Sidebar />
        <div styleName="container">
          <Header />
          <Content />
        </div>
      </div>
    )
  }
}
