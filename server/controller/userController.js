import User from '../model/User.js'
import { StatusCodes } from "http-status-codes"

const login = async (req, res) => {
    const { username, password } = req.body
    //Check empty 
    if (!username || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Please enter username or password' })
    }
    // find user in database
    const user = await User.findOne({ username: username })
    if (user === null) {
        return res.status(StatusCodes.NOT_FOUND).json({ msg: "Not Found User" })
    }
    // compare password hash
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Password wrong" })
    }
    return res.status(StatusCodes.OK).json({ user: user, msg: "Login success" })
}


const register = async (req, res) => {
    const { username, password, email, confirmPassword } = req.body
    // find this user in db
    const isExist = await User.findOne({ username: username })
    const isExistEmail = await User.findOne({ email: email })
    // check empty
    if (!username || !password || !email || !confirmPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Please provide all required fields' })
    }
    //check user exist?
    if (isExist) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please check username again, it is exist" })
    }
    if (isExistEmail) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please check email again, it is exist" })
    }
    if (password !== confirmPassword) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Password and confirm password are not the same" })
    }
    //processing register
    const user = await User.create({
        username: username,
        password: password,
        email: email
    })
    return res.status(StatusCodes.CREATED).json({ user: user, msg: "Create user success" })


}
export { login, register }