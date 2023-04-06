

const LoginForm = () => {
    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>LOGIN FORM</h1>
                <form>
                    <label>Username</label>
                    <input type="text" placeholder="Enter username"></input>
                    <label>Passwords</label>
                    <input type="password" placeholder="Enter password"></input>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
                <label>Not have account? <a href="#" target="_blank">Register now</a></label>
            </div>
        </div>
    )
}

export default LoginForm