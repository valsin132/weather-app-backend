import express from 'express';
import { topSearches, addSearch } from '../controllers/searcheController.js';

const router = express.Router();

router.get('/top', topSearches);

router.post('/', addSearch);

export default router;
