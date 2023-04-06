import { useState } from 'react';

const LoginForm = () => {
    const [typePassword, setTypePassword] = useState('password')
    const [user, setUser] = useState({
        username: "",
        password: "",
    })

    const handleInput = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const handleShowPassword = (e) => {
        if (e.target.checked) {
            setTypePassword("text")
        }
        else {
            setTypePassword("password")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" name="username" className="form-input" value={user.username} onChange={handleInput}></input>
                    <label htmlFor="password">Passwords</label>
                    <input type={typePassword} id="password" placeholder="Enter password" name="password" className="form-input" value={user.password} onChange={handleInput}></input>
                    <input type="checkbox" id="showPass" onChange={handleShowPassword} />
                    <label htmlFor="showPass" style={{ padding: '5px' }}>Show password</label>
                    <button type="submit">Login</button>
                </form>
                <label>Not have account? <a href="#" target="_blank">Register now</a></label>
            </div>
        </div >
    )
}

export default LoginForm