import { Router } from 'express';
import healthRoutes from './healthRoutes.js';
import contactRoutes from './contactRoutes.js';
import insightRoutes from './insightRoutes.js';

const router = Router();
router.use('/health', healthRoutes);
router.use('/contact', contactRoutes);
router.use('/insights', insightRoutes);
export default router;
