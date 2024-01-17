import { reportService } from '../services/index.js'
import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = '../express/uploads'
    console.log('Destination Path:', destinationPath)
    cb(null, destinationPath)
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage }).array('files', 300)

const reportController = () => ({
  async getAll (req, res) {
    try {
      const reports = await reportService.findReports(req)
      return res.send(reports)
    } catch (error) {
      throw error
    }
  },
  async get (req, res) {
    try {
      return res.send('Всё ок')
    } catch (error) {
      throw error
    }
  },
  async create (req, res) {
    try {
      upload(req, res, async (err) => {
        if (err) {
            console.log(err)
            return res.status(500).send('Произошла ошибка при загрузке файлов')
        }
        console.log('---REQ Body', req.bodu)
        console.log('---REQ Files', req.files)
    })
      return res.send('SUCCESS')
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async update (req, res) {
    try {
      return res.send('Всё ок')
    } catch (error) {
      throw error
    }
  },
  async delete (req, res) {
    try {
      return res.send('Всё ок')
    } catch (error) {
      throw error
    }
  }
})

export default reportController()