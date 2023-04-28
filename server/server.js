import express from 'express'
const app = express();
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connect from './db/connect.js'
import { Server } from "socket.io"
import session from "express-session"

app.use(express.json())
app.use(cors())
app.use(session({
    secret: "Secret key"
}))
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);


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

const onlineUsers = {}
let message = [{}]

io.on("connection", (socket) => {
    console.log("Connection ", socket.id)
    socket.on("login", (user) => {
        onlineUsers[socket.id] = { serverId: socket.id, username: user.username }
        // update list friend of user have been keeping online
        socket.broadcast.emit("friends", Object.values(onlineUsers))
        // get list friend of user have login
        socket.emit("friends", Object.values(onlineUsers))
    })

    socket.on("chat_with", (friendId, friendName) => {
        socket.join(friendId)
        // const senderId = socket.id
        // const sender = onlineUsers[socket.id]
        // const recipient = io.sockets.connected[friendId]
        console.log("Chat with friend ", friendName)
    })

    socket.on("send_message", (data) => {
        socket.to(data.id).emit("receive_message", data)
    })

    socket.on("offline", () => {
        delete onlineUsers[socket.id]
        socket.broadcast.emit("friends", Object.values(onlineUsers))
        console.log(onlineUsers)
    })

    socket.on("disconnect", () => {
        delete onlineUsers[socket.id]
        socket.broadcast.emit("friends", Object.values(onlineUsers))
        console.log("Disconnect  ", socket.id)
    })
})
start()
