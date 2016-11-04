export default (event) => {
  event.stopPropagation()
  event.nativeEvent && event.nativeEvent.stopImmediatePropagation()
}
