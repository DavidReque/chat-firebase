const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">David Chat</span>
                <span className="title">Register</span>
                <form action="">
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input style={{display: 'none'}} type="file" id="file" />
                    <label htmlFor="file"><img src="" alt="" /></label>
                    <button>Sign ip</button>
                </form>
                <p>You do have an account? Login</p>
            </div>
        </div>
    );
}

export default Register;
