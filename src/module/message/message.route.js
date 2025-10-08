import express from 'express';
import { MessageControllers } from './message.controllers.js';

const router = express.Router();

router.get('/get-message', MessageControllers.getAllmessageControllers);

export const RouterMessage = router;
