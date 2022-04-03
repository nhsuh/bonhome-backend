import express from 'express';

import { createProvider, getProvider, deleteProvider, updateProvider, getAllProviders } from '../controllers/providers.js';

const router = express.Router();

router.get('/', getAllProviders);
router.get('/:id', getProvider);
router.post('/', createProvider);
router.delete('/:id', deleteProvider);
router.patch('/:id', updateProvider);

export default router;

