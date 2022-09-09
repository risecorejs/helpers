import fs from 'fs'
import path from 'path'
import _ from 'lodash'

/**
 * SET-GLOBAL-STRUCTS
 * @param dir {string?}
 */
export default function (dir?: string) {
  dir ||= path.resolve('structs')

  global.$structs = {}

  for (const file of fs.readdirSync(dir)) {
    const stat = fs.statSync(path.join(dir, file))

    if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.json'))) {
      const key = _.camelCase(path.parse(file).name)

      $structs[key] = require(path.join(dir, file))
    }
  }

  Object.freeze($structs)
}

declare global {
  export var $structs: {
    [key: string]: any
  }
}
