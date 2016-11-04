import React from 'react'
import SNReact from 'react-spatial-navigation'

import CSSModules from 'react-css-modules'
import style from './style'

import Section from './Section'


const getTransitionValue = (css) => css ? parseInt(css.match(/\.*translateY\((.*)px\)/)[1]) : 0

const shiftSections = () => {
  const content                             = document.getElementsByClassName(style.content)[0]
  const sections                            = content.children
  const dumbSectionPlaceholder              = document.getElementsByClassName(style.dumbSectionPlaceholder)[0]
  const dumbSpaceBetweenSectionPlaceholder  = document.getElementsByClassName(style.dumbSpaceBetweenSectionPlaceholder)[0]

  let prevFocusedIndex = 0

  return (focusedIndex) => {
    const direction             = focusedIndex > prevFocusedIndex ? 'down' : 'up'
    const sectionHeight         = dumbSectionPlaceholder.offsetHeight
    const spaceBetweenSections  = dumbSpaceBetweenSectionPlaceholder.offsetHeight
    const sectionFullHeight     = sectionHeight + spaceBetweenSections

    if (!content.style.transform) {
      content.style.transform = 'translateY(0px)'
    }

    if (direction == 'down') {
      const contentTranslateY = `${getTransitionValue(content.style.transform) - sectionFullHeight}px`
      const sectionTranslateY = `${getTransitionValue(sections[prevFocusedIndex].style.transform) + (sectionFullHeight - sectionHeight * 0.125)}px`

      content.style.transform = `translateY(${contentTranslateY}) `
      sections[prevFocusedIndex].className += ' hiddenSection'
      sections[prevFocusedIndex].style.transform = `translateY(${sectionTranslateY}) scale(0.75)`
    }
    else {
      const contentTranslateY = `${getTransitionValue(content.style.transform) + sectionFullHeight}px`

      content.style.transform = `translateY(${contentTranslateY})`
      sections[focusedIndex].className = sections[focusedIndex].className.replace(' hiddenSection', '')
      sections[focusedIndex].style.transform = 'translateY(0px) scale(1)'
    }

    document.body.scrollTop = 0

    prevFocusedIndex = focusedIndex
  }
}


@SNReact.Decorators.Container('Content', {
  map: { up: 'Search', left: 'Sidebar' },
  startContainer: true,
})
@CSSModules(style)
export default class Content extends React.Component {
  sections = Array.apply(null, {length: 10}).map(() => Array.apply(null, {length: 15}).map(Number.call, Number))

  componentDidMount() {
    const { SNContainer: { collection } } = this.props
    const method = shiftSections()

    collection.eventAggregator.subscribe('onNavigate', () => method(collection.focusedIndex))
  }

  render() {
    return (
      <div styleName="wrapper">
        <div styleName="content">
          {
            this.sections.map((items, index) => (
              <Section key={index} index={index} items={items} />
            ))
          }
          <div styleName="dumbSectionPlaceholder"></div>
          <div styleName="dumbSpaceBetweenSectionPlaceholder"></div>
        </div>
      </div>
    )
  }
}
