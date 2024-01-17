import express from 'express'
import city from './cityRouter.js'
import user from './userRouter.js'
import report from './reportRouter.js'

const router = new express.Router()

router.use('/cities', city)
router.use('/users', user)
router.use('/reports', report)

export default router