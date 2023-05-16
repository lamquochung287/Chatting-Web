import express from 'express'
const router = express.Router();
import { sendMessage, getMessage } from '../controller/chatController.js';
router.route("/sendMessage").post(sendMessage)
router.route("/getMessage").post(getMessage)
export default router
