import { Router } from 'express';
import * as animalsController from '../controllers/animals.controller.js';

const router = Router();

router.get('/', animalsController.list);
router.post('/', animalsController.create);

export default router;
