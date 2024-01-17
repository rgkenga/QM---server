import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './src/routers/index.js'
import db from './src/models/index.js'

const PORT = 3000
const sequelize = db.sequelize

const app = express()
app.use(cors({
  origin: '*'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/v1', router)

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ force: false, alter: false })
    app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`))
  } catch (error) {
    console.log(error)
  }
}

start()
