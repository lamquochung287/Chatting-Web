import express from 'express'
const app = express();
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import connect from './db/connect.js'


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

start()
