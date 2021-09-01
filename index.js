const fs = require('fs')
const lodash = require('lodash')
const path = require('path')

const libPath = __dirname + '/lib'
const lib = {}

for (const file of fs.readdirSync(libPath)) {
  lib[lodash.camelCase(path.parse(file).name)] = require(libPath + '/' + file)
}

module.exports = lib
