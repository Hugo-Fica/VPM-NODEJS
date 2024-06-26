import { DataTypes } from 'sequelize'
import db from '../database/config.db.js'

export const Setting = db.define(
  'setting',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    unit: { type: DataTypes.BOOLEAN, defaultValue: true },
    leakage: { type: DataTypes.BOOLEAN, defaultValue: true },
    value_leakage: { type: DataTypes.INTEGER, defaultValue: 0 },
    period: { type: DataTypes.INTEGER, defaultValue: 0 },
    project_id: { type: DataTypes.UUID }
  },
  { tableName: 'Setting', timestamps: false }
)
