import { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [typePassword, setTypePassword] = useState('password')


    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleShowPassword = (e) => {
        if (e.target.checked) {
            setTypePassword("text")
        }
        else {
            setTypePassword("password")
        }
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" className="form-input" value={username} onChange={handleChangeUsername}></input>
                    <label htmlFor="password">Passwords</label>
                    <input type={typePassword} id="password" placeholder="Enter password" className="form-input" value={password} onChange={handleChangePassword}></input>
                    <input type="checkbox" id="showPass" onChange={handleShowPassword} />
                    <label htmlFor="showPass" style={{ padding: '5px' }}>Show password</label>
                    <button type="submit">Login</button>
                </form>
                <label>Not have account? <a href="#" target="_blank">Register now</a></label>
            </div>
        </div>
    )
}

export default LoginForm