import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ButtonCustom } from './ButtonCustom';
import { useGlobalContext } from '../context/AppContext';

const LoginForm = () => {
    const { isLoading, nameButton, styleButton, login } = useGlobalContext()
    const [typePassword, setTypePassword] = useState('password')
    const [isShowPwd, setShowPwd] = useState(false)
    const [styleInput, setStyleInput] = useState(false)
    const [isEmpty, setEmpty] = useState({})

    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const checkEmpty = (inputValue) => {
        if (!inputValue.username || !inputValue.password) {
            setEmpty({ isEmpty: true, message: "Please enter username and password field" })
            setStyleInput(true)
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
        checkEmpty({ username: user.username, password: user.password })
        setEmpty({ isEmpty: false })
        login(user)


    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form onSubmit={handleSubmit}>
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
                    <ButtonCustom process={styleButton} name={nameButton} disabled={isLoading}></ButtonCustom>
                    <div>
                        <span className={isEmpty === true ? "form-message-error" : ""}>
                            {isEmpty.message}
                        </span>
                    </div>
                </form>
                <label>Not have account? <a href="#" target="_blank">Register now</a></label>
            </div>
        </div >
    )
}

export default LoginForm