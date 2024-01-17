import express from 'express'
import { userController } from '../controllers/index.js'

const router = new express.Router()

router.get('/', userController.getAll)

export default router
