import User from "../model/User.js"
import { StatusCodes } from "http-status-codes"

const sendMessage = async (req, res) => {
    const username = req.session.username
    const { receiveName, message } = req.body
    const findUser = await User.findOne({ username: username })
    const findReceive = await User.findOne({ username: receiveName })

    if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `User not found ${username}` })
    }
    if (!findReceive) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Receive not found ${receiveName}` })
    }

    if (!(findUser.chatHistory).find(receive => receive.receiver === receiveName)) {
        findUser.chatHistory.push({
            receiver: receiveName,
            messages: [{ content: message }]
        })
        findUser.save()
        return res.status(StatusCodes.OK).json({ msg: "Send message successfully", data: findUser })
    }
    if ((findUser.chatHistory).find(receive => receive.receiver === receiveName)) {
        const indexReceive = findUser.chatHistory.findIndex(receive => receive.receiver === receiveName)
        findUser.chatHistory[indexReceive].messages.push({
            content: message
        })
    }
    findUser.save()
    return res.status(StatusCodes.OK).json({ msg: "Send message successfully", data: findUser })
}

const getMessage = async (req, res) => {
    const username = req.session.username
    const { receive } = req.body
    const findUser = await User.findOne({ username: username })
    const findReceive = await User.findOne({ username: receive })
    if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `User not found ${username}` })
    }
    if (!findReceive) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Receive not found ${receive}` })
    }
    const findMessage = await User.find({ user: findUser })
    if (!findMessage) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Messages not found` })
    }
    const messages = (findMessage.receiveList).find(receive => receive === findReceive)

    return res.status(StatusCodes.OK).json({ msg: `Get message success`, })
}


export { sendMessage }