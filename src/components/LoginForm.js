import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { ButtonCustom } from './ButtonCustom';

const LoginForm = () => {
    const [typePassword, setTypePassword] = useState('password')
    const [isShowPwd, setShowPwd] = useState(false)
    const [button, setButton] = useState("btn-submit")
    const [buttonName, setButtonName] = useState("Login")
    const [isSubmit, setIsSubmit] = useState(false)

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
        setIsSubmit(true)
        setButton("btn-loading")
        setButtonName("Watting...")
        e.preventDefault()
        if (user.username === "quochung" && user.password === "123456") {
            setButton("btn-success")
            setButtonName("SUCCESS")
        }

    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" name="username" className="form-input" value={user.username} onChange={handleInput}></input>
                    <label htmlFor="password">Passwords</label>
                    <div className="form-control-pass">
                        <input type={typePassword} id="password" placeholder="Enter password" name="password" className="form-input" value={user.password} onChange={handleInput}></input>
                        <button className="btn-show-pass" onClick={handleShowPassword}>
                            {isShowPwd ? (
                                <AiFillEye></AiFillEye>
                            ) : (
                                <AiFillEyeInvisible></AiFillEyeInvisible>
                            )}
                        </button>
                    </div>
                    <ButtonCustom process={button} name={buttonName} disabled={isSubmit}></ButtonCustom>
                </form>
                <label>Not have account? <a href="#" target="_blank">Register now</a></label>
            </div>
        </div >
    )
}

export default LoginForm