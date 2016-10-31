import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Center from 'components/Center'

import Item from './Item'


@CSSModules(style, { allowMultiple: true })
export default class SidebarNavig extends React.Component {
  static defaultProps = {
    items: [
      { title: 'Search', link: '#', icon: 'search' },
      { title: 'Home', link: '#', icon: 'home' },
      { title: 'Subsribes', link: '#', icon: 'plug' },
      { title: 'Library', link: '#', icon: 'bookmark' },
      { title: 'History', link: '#', icon: 'history' },
      { title: 'Settings', link: '#', icon: 'cog' }
    ]
  }

  render() {
    const { items } = this.props

    return (
      <div styleName="navig">
        {
          items.map((item, index) => (
            <Item key={index} {...item} />
          ))
        }
      </div>
    )
  }
}
