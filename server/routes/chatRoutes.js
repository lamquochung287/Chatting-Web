import express from 'express'
const router = express.Router();
import { sendMessage } from '../controller/chatController.js';
router.route("/sendMessage").post(sendMessage)

export default router
