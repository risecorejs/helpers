import { Sequelize, Options as SequelizeOptions } from 'sequelize'
import path from 'path'
import fs from 'fs'

import { IFieldsWithSequelize, IOptions } from '../interfaces/get-models'

import env from './env'

/**
 * GET-MODELS
 * @param options {IOptions}
 * @return {IFieldsWithSequelize}
 */
export default function (options: IOptions): IFieldsWithSequelize {
  const config: SequelizeOptions = getConfig(options)

  const sequelize: Sequelize = new Sequelize(config)

  const db: IFieldsWithSequelize = {
    sequelize
  }

  const modelsDir: string = path.resolve.apply(null, options.modelsDir)

  for (const file of fs.readdirSync(modelsDir)) {
    if (file.endsWith('.js')) {
      const modelPath: string = path.join(modelsDir, file)

      const getModel: (sequelize: Sequelize) => any = require(modelPath)

      const Model = getModel(sequelize)

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

/**
 * GET-CONFIG
 * @param options {IOptions}
 */
function getConfig(options: IOptions): SequelizeOptions {
  const configPath = path.resolve.apply(null, options.configPath)

  const config = require(configPath)

  return options.NODE_ENV ? config[env('NODE_ENV', 'development')] : config
}
