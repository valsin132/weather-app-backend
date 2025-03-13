import express from 'express'
import { getSearches, addSearch } from '../controllers/searcheController.js'

const router = express.Router()

router.get('/', getSearches)

router.post('/', addSearch)

export default router
