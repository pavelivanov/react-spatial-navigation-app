import React from 'react'
import SNReact from 'react-spatial-navigation'

import CSSModules from 'react-css-modules'
import style from './style'

import MediaCard from 'components/MediaCard'


@SNReact.Decorators.Element()
@CSSModules(style, { allowMultiple: true })
export default class ContentSectionItem extends React.Component {
  render() {
    const { sectionIndex, index, disabled } = this.props
    const { thumbnailUrl } = this.props


    return (
      <div styleName="item">
        <MediaCard  />
      </div>
    )
  }
}
