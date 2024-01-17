import model from '../models/index.js'
import { Op } from 'sequelize'

const { Report } = model

const reportSerice = () => ({
  async findReports (req) {
    console.log(Report)
    const report = await Report.findAll()
    return report
  },
  async findReport (req) {
  },
  async createReport ({ body: { points, user_id, status, description, published, check }}) {
    return await Report.create({
      points,
      user_id,
      status,
      description,
      published,
      check
    })
  },
  async updateReport (req) {

  },
  async deleteReport (req) {

  }
})

export default reportSerice()