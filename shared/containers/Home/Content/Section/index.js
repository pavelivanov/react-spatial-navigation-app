import React from 'react'
import ReactDOM from 'react-dom'
import SNReact from 'react-spatial-navigation'
import getMocks from 'util/getMocks'

import CSSModules from 'react-css-modules'
import contentStyle from '../style'
import style from './style'

import Item from './Item'


const shiftItems = (sectionWrapper, section) => {
  const contentWrapper = document.getElementsByClassName(contentStyle.wrapper)[0]
  const items = section.children

  let prevFocusedIndex = 0
  let sectionCurrMarginLeft = 0

  return (focusedIndex) => {
    const focusedItem = items[focusedIndex]
    const direction = focusedIndex > prevFocusedIndex ? 'right' : 'left'
    const itemWidth = focusedItem.offsetWidth

    const sectionWrapperWidth   = sectionWrapper.offsetWidth
    const centringOffsetLeft    = (sectionWrapperWidth - itemWidth) / 2
    const focusedItemOffsetLeft  = focusedItem.offsetLeft
    let sectionNewMarginLeft

    if (focusedItemOffsetLeft > centringOffsetLeft || Math.abs(sectionCurrMarginLeft) > centringOffsetLeft) {
      sectionNewMarginLeft = sectionCurrMarginLeft + centringOffsetLeft - focusedItemOffsetLeft
      section.style.marginLeft = sectionNewMarginLeft + 'px'
    }
    else {
      sectionNewMarginLeft = 0
      section.style.marginLeft = sectionNewMarginLeft + 'px'
    }

    contentWrapper.scrollLeft = 0
    sectionCurrMarginLeft = sectionNewMarginLeft
    prevFocusedIndex = focusedIndex
  }
}


@SNReact.Decorators.Element({
  hasCollection: true,
  collectionSettings: {
    lazy: {
      right: {
        fromEnd: 3,
      }
    }
  }
})
@CSSModules(style)
export default class ContentSection extends React.Component {
  constructor(props) {
    super()
    
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    getMocks(8).then((items) => {
      this.setState({
        items,
      })
    })
  }

  componentDidMount() {
    const { SNElement, SNElement: { collection } } = this.props

    const wrapper = ReactDOM.findDOMNode(this.refs.wrapper)
    const section = ReactDOM.findDOMNode(this.refs.section)
    const method = shiftItems(wrapper, section)

    SNElement.collection.subscribeLazyLoad((fulfill) => {
      getMocks(8).then((items) => {
        this.setState({
          items: [
            ...this.state.items,
            ...items
          ],
        }, () => {
          fulfill()
        })
      })
    })

    collection.eventAggregator.subscribe('onNavigate', () => method(collection.focusedIndex))
  }

  render() {
    const { items } = this.state
    const { index: sectionIndex } = this.props

    const styles = {
      top: `${100 * sectionIndex}%`
    }

    return (
      <div ref="wrapper" styleName="wrapper" style={styles}>
        <div ref="section" styleName="section">
          {
            items.map((item, index) => (
              <Item key={index} {...item} sectionIndex={sectionIndex * items.length} index={index} />
            ))
          }
        </div>
      </div>
    )
  }
}
