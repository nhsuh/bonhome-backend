import express from 'express';

import { createParent, getParent, deleteParent, updateParent, getAllParents } from '../controllers/parents.js';

const router = express.Router();

router.get('/', getAllParents);
router.get('/:id', getParent);
router.post('/', createParent);
router.delete('/:id', deleteParent);
router.patch('/:id', updateParent);

export default router;

