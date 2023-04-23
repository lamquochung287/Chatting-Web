import express from 'express'
const app = express();
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connect from './db/connect.js'
import { Server } from "socket.io"


app.use(express.json())
app.use(cors())
app.use("/api/users", userRoutes);

const startServer = app.listen(5000, () => {
    console.log('listening on port 5000')
})

const start = async () => {
    try {
        await connect(process.env.MONGO_URI)
        startServer
    }
    catch (error) {
        console.log(error)
    }
}

const io = new Server(startServer, {
    cors: {
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    }
})

let listFriend = new Set()
io.on("connection", (socket) => {
    console.log("Connection ", socket.id)
    socket.on("setup", (user) => {
        socket.join(user)
        listFriend.add(user.username)
        socket.emit("data", [...listFriend])
        socket.emit("update_Status", true)
        console.log(listFriend)
    })

    socket.on("chat_with", (friendName) => {
        socket.join(friendName)
        console.log("Chat with friend ", friendName)

    })

    socket.on("offline", (user) => {
        listFriend.delete(user.username)
        console.log(listFriend)
    })

    socket.on("disconnect", (user) => {
        listFriend.delete(user.username)
        console.log("Disconnect  ", socket.id)
    })
})
start()
