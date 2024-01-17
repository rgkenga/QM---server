import express from 'express'
import { cityController } from '../controllers/index.js'

const router = new express.Router()

router.get('/', cityController.getAll)

export default router
