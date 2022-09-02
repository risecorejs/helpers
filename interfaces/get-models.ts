import { Sequelize } from 'sequelize'
import { IFields } from '.'

export interface IOptions {
  configPath: string[]
  modelsDir: string[]
  NODE_ENV?: boolean
}

export interface IFieldsWithSequelize extends IFields {
  sequelize: Sequelize
}
