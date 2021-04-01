import { Router } from 'express';
import { indexController } from "../controller/indexController";
const router: Router = Router();

router.post('/verify', indexController.verifyToken);
router.post('/generate', indexController.genrateToken);

export default router;