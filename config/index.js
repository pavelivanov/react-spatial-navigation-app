import base from './common'

export default require(`./${process.env.NODE_ENV}`)(base)
