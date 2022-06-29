const fs = require('fs')
const path = require('path')
const _ = require('lodash')

/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 * @returns {void}
 */
module.exports = (dir) => {
  dir ||= path.resolve('structs')

  global.$structs = {}

  const files = fs.readdirSync(dir)

  for (const file of files) {
    const stat = fs.statSync(dir + '/' + file)

    if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.json'))) {
      const key = _.camelCase(path.parse(file).name)

      global.$structs[key] = require(dir + '/' + file)
    }
  }

  Object.freeze(global.$structs)
}
