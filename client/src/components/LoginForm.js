import { useState, useEffect } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Loading } from './Loading';
import { useGlobalContext } from '../context/AppContext';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../features/login/loginSlice';

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { isLoading, isLogin, isError, messageError } = useSelector((state) => state.login)
    const [typePassword, setTypePassword] = useState('password')
    const [isShowPwd, setShowPwd] = useState(false)
    const [styleInput, setStyleInput] = useState(false)
    const [isEmpty, setEmpty] = useState({})

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const checkEmpty = () => {
        if (!user.username || !user.password) {
            setEmpty({ isEmpty: true, message: "Please enter username and password field" })
            setStyleInput(true)
            return
        }
        else {
            setEmpty({ isEmpty: false })
            setStyleInput(false)
            return
        }
    }

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
        checkEmpty()
    }

    useEffect(() => {
        if (isLogin === true) {
            setTimeout(() => {
                navigate("/person")
            }, 2000)
        }
    }, [isLogin])


    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" name="username"
                        className={styleInput === true ? "form-input-error" : "form-input"}
                        value={user.username} onChange={handleInput}></input>
                    <label htmlFor="password">Passwords</label>
                    <div className="form-control-pass">
                        <input type={typePassword} id="password" placeholder="Enter password" name="password" className={styleInput === true ? "form-input-error" : "form-input"}
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
                    <div>
                        <span className={isEmpty.isEmpty === true || isError === true ? "form-message-error" : ""}>
                            {isEmpty.message || messageError}
                        </span>
                    </div>
                </form>

                <label>Not have account? <Link to="/register">Register now</Link></label>
            </div>
        </div >
    )
}

export default LoginForm