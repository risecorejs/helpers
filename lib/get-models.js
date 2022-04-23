const { Sequelize, DataTypes } = require('sequelize')
const path = require('path')
const fs = require('fs')

const env = require('./env')

/**
 * MODELS
 * @param options {{
 *   configPath: string[],
 *   modelDir: string[],
 *   NODE_ENV: boolean?
 * }}
 * @return {Object}
 */
module.exports = (options) => {
  const configPath = path.resolve(...options.configPath)

  const config = options.NODE_ENV ? require(configPath)[env('NODE_ENV', 'development')] : require(configPath)

  const sequelize = new Sequelize(config.database, config.username, config.password, config)

  const db = {
    Sequelize,
    sequelize
  }

  const modelDir = path.resolve(...options.modelDir)

  for (const file of fs.readdirSync(modelDir)) {
    if (file.endsWith('.js')) {
      const modelPath = path.join(modelDir, file)

      const Model = require(modelPath)(sequelize, DataTypes)

      db[Model.name] = Model
    }
  }

  for (const key in db) {
    if (db.hasOwnProperty(key) && db[key].associate) {
      db[key].associate(db)
    }
  }

  return db
}
