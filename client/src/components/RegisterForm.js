import React, { useEffect } from 'react'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../features/register/registerSlice';
import { Loading } from './Loading';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegisterForm = () => {
    const navigate = useNavigate()
    const { isLoading, isError, messageError, isSuccess } = useSelector((state) => state.register)
    const dispatch = useDispatch()
    const [typePassword, setTypePassword] = useState('password')
    const [typePassword2, setTypePassword2] = useState('password')
    const [isShowPwd, setShowPwd] = useState(false)
    const [isShowPwd2, setShowPwd2] = useState(false)


    const [user, setUser] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        email: "",
    })

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleShowPassword = () => {
        if (isShowPwd === false) {
            setShowPwd(true)
            setTypePassword("text")
        }
        else {
            setShowPwd(false)
            setTypePassword("password")
        }

    }

    const handleShowPassword2 = () => {
        if (isShowPwd2 === false) {
            setShowPwd2(true)
            setTypePassword2("text")
        }
        else {
            setShowPwd2(false)
            setTypePassword2("password")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser(user))
    }
    useEffect(() => {
        document.title = 'Register Page'
    }, [])
    useEffect(() => {
        if (isError) {
            toast.error(messageError)
        }
        if (isSuccess === true) {
            toast.success("Register success after 2s will navigate login page")
            setTimeout(() => {
                navigate("/login")
            }, 2000)
        }
    }, [isSuccess, isError])
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>REGISTER FORM</h1>
                <form onSubmit={handleSubmit} method="post">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" name="username" className="form-input" value={user.username} onChange={handleInput}></input>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter email" name="email" className="form-input" value={user.email} onChange={handleInput}></input>
                    {/* <label htmlFor="birth">Date</label>
                    <input type="date" id="birth" name="birth" className="form-input" value={user.birth} onChange={handleInput}></input>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" className="form-input" onChange={handleInput}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select> */}
                    <label htmlFor="password">Passwords</label>
                    <div className="form-control-pass">
                        <input type={typePassword} id="password" placeholder="Enter password" name="password" className="form-input" value={user.password} onChange={handleInput}></input>
                        <button type="button" className="btn-show-pass" onClick={handleShowPassword}>
                            {isShowPwd ? (
                                <AiFillEye></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                            )}
                        </button>
                    </div>
                    <label htmlFor="confirmPassword">Passwords Confirm</label>
                    <div className="form-control-pass">
                        <input type={typePassword2} id="confirmPassword" placeholder="Enter confirm password" name="confirmPassword" className="form-input" value={user.confirmPassword} onChange={handleInput}></input>
                        <button type="button" className="btn-show-pass" onClick={handleShowPassword2}>
                            {isShowPwd2 ? (
                                <AiFillEye></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                            )}
                        </button>
                    </div>
                    <div>
                        {isLoading ?
                            <Loading></Loading>
                            :
                            <button className="btn-submit" type="submit">REGISTER</button>
                        }
                    </div>
                </form>
                <label>Have Account <Link to="/login">Login now</Link></label>

            </div>
        </div >
    )
}

export default RegisterForm