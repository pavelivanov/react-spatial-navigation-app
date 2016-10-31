import React from 'react'


export default class Root extends React.Component {
  componentDidMount() {
    // TODO add to DOCS that user need to place this for preventing scrolling window when elements focusing
    window.addEventListener('scroll', () => {
      document.body.scrollLeft = 0
      document.body.scrollTop = 0
    })
  }


  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
