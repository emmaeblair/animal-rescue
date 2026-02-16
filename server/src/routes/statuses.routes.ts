import { Router } from 'express';
import * as statusesController from '../controllers/statuses.controller.js';

const router = Router();

router.get('/', statusesController.list);

export default router;
