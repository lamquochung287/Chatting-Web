import { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Loading } from './Loading';
import { useGlobalContext } from '../context/AppContext';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../features/login/loginSlice';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isLogin, isError, messageError } = useSelector((state) => state.login)
    const [typePassword, setTypePassword] = useState('password')
    const [isShowPwd, setShowPwd] = useState(false)

    const [user, setUser] = useState({
        username: "",
        password: "",
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


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ user: user }))
    }

    useEffect(() => {
        document.title = 'Login Page'
    }, [])

    useEffect(() => {
        if (isError) {
            toast.error(messageError)
            return;
        }
        if (isLogin === true) {
            toast.success("Login successful")
            setTimeout(() => {
                navigate("/")
            }, 2000)
        }
    }, [isLogin, isError])


    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" name="username"
                        className="form-input"
                        value={user.username} onChange={handleInput}></input>
                    <label htmlFor="password">Passwords</label>
                    <div className="form-control-pass">
                        <input type={typePassword} id="password" placeholder="Enter password" name="password" className="form-input"
                            value={user.password} onChange={handleInput}></input>
                        <button type="button" className="btn-show-pass" onClick={handleShowPassword}>
                            {isShowPwd ? (
                                <AiFillEye></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                            )}
                        </button>
                    </div>
                    <div>
                        {isLoading === true ? (
                            <Loading></Loading>
                        )
                            : (
                                <button type="submit" className="btn-submit">Login</button>
                            )
                        }

                    </div>
                </form>

                <label>Not have account? <Link to="/register">Register now</Link></label>
            </div>
        </div >
    )
}

export default LoginForm