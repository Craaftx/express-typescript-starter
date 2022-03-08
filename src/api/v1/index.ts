import express from 'express'
import snail from './snails'

const router = express.Router()

router.use('/v1/snails', snail)

export default router
