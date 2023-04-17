import mongoose from 'mongoose'

const connectDB = (url) => {
    return mongoose.connect(url)
        .then(() => {
            console.log("connect DB successful")
        })
        .catch((err) => {
            console.log(`connect DB failed ${err}`)
        })
}

export default connectDB