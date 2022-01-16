import express, { Response } from 'express';
import healthController from './healthController';

const router = express.Router();

router.get('/health',async (_, res:Response) => {
    const controller = new healthController();
    const response = await controller.getMessage();
    return res.send(response);
});

export default router;