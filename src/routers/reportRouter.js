import express from 'express'
import { reportController } from '../controllers/index.js'

const router = new express.Router()

router.get('/', reportController.getAll)
router.get('/:id', reportController.get)
router.post('/create', reportController.create)
router.put('/update/:id', reportController.update)
router.delete('/delete/:id', reportController.delete)

export default router
