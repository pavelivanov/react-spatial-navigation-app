export default (size, timeout) => {
  return new Promise((fulfill) => {
    setTimeout(() => {
      const items = Array.apply(null, { length: size || 6 }).map(() => 'Smth')

      fulfill(items)
    }, timeout || 400)
  })
}
