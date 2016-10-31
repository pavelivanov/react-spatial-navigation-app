import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


const MediaCard = () => {
  const previewStyle = {
    backgroundImage: `url(https://i.ytimg.com/vi/hLpfwI3SFNk/hqdefault.jpg)`
  }

  return (
    <div styleName="mediaCard">
      <div styleName="preview" style={previewStyle}></div>
      <div styleName="content">
        <div styleName="title">Название чего-то там</div>
        <div styleName="count">Зрителей: 2354345</div>
        <div styleName="count">Подписчиков: 4432</div>
      </div>
    </div>
  )
}

export default CSSModules(MediaCard, style)
