import { Router } from 'express';
import statusesRoutes from './statuses.routes.js';
import animalsRoutes from './animals.routes.js';

const router = Router();

router.use('/statuses', statusesRoutes);
router.use('/animals', animalsRoutes);

export default router;
