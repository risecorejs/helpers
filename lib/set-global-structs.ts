import fs from 'fs'
import path from 'path'
import _ from 'lodash'

/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 * @return {void}
 */
export default function (dir?: string): void {
  dir ||= path.resolve('structs')

  global.$structs = {}

  for (const file of fs.readdirSync(dir)) {
    const stat = fs.statSync(dir + '/' + file)

    if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.json'))) {
      const key = _.camelCase(path.parse(file).name)

      global.$structs[key] = require(dir + '/' + file)
    }
  }

  Object.freeze(global.$structs)
}
