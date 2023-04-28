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

const sortAndFilterListMessage = (listMessage) => {
    const messages = listMessage
    let sortMessage = messages.sort((a, b) => (new Date(a.message.date) - new Date(b.message.date)))
    return sortMessage
}

const getMessage = async (req, res) => {
    const username = req.session.username
    const receiveName = req.params.friendName
    const findUser = await User.findOne({ username: username })
    const findReceive = await User.findOne({ username: receiveName })
    if (!findUser) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `User not found ${username}` })
    }
    if (!findReceive) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: `Receive not found ${receiveName}` })
    }
    // find message have sender and receiver name is receive or username
    const resultListMessage = []
    if ((findUser.chatHistory).find(receive => receive.receiver === receiveName)) {
        const indexReceive = findUser.chatHistory.findIndex(receive => receive.receiver === receiveName)
        const listMessage = findUser.chatHistory[indexReceive].messages.forEach(message => {
            const { content, date } = message
            resultListMessage.push({
                message: {
                    content: content,
                    date: date,
                    isOwner: true,
                }
            })
        })
    }
    // find receive is user login
    if ((findReceive.chatHistory).find(receive => receive.receiver === username)) {
        const indexReceive = findReceive.chatHistory.findIndex(receive => receive.receiver === username)
        const listMessage = findReceive.chatHistory[indexReceive].messages.forEach(message => {
            const { content, date } = message
            resultListMessage.push({
                message: {
                    content: content,
                    date: date,
                    isOwner: false,
                }
            })
        })
    }
    return res.status(StatusCodes.OK).json({ msg: `Get message success`, listMessage: sortAndFilterListMessage(resultListMessage) })
}


export { sendMessage, getMessage }