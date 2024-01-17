import Sequelize from 'sequelize'
import enVariables from '../config/config.js'
import CityModel from '../models/City.js'
import GalleryModel from '../models/Gallery.js'
import ReportModel from '../models/Report.js'
import UserModel from '../models/User.js'

const env = process.env.NODE_ENV || 'development'
const config = enVariables[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const City = CityModel(sequelize, Sequelize.DataTypes)
const Gallery = GalleryModel(sequelize, Sequelize.DataTypes)
const Report = ReportModel(sequelize, Sequelize.DataTypes)
const User = UserModel(sequelize, Sequelize.DataTypes)

db[City.name] = City
db[Gallery.name] = Gallery
db[Report.name] = Report
db[User.name] = User

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
    const associations = db[modelName].associations
    if (associations) {
      console.log(`Associations for ${db[modelName].name} model:`, associations)
    } else {
      console.error(`Associations for ${db[modelName].name} model not found.`)
    }
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db
