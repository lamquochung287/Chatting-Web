import express from 'express'
const router = express.Router();
import { login, register, addFriend, getListFriends } from '../controller/userController.js';

router.route("/login").post(login)
router.route("/register").post(register)
router.route("/addFriend").post(addFriend)
router.route("/getFriendLists").get(getListFriends)
export default router