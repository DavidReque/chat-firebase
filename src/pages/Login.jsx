const Login = () => {
    return (
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">David Chat</span>
          <span className="title">Login</span>
          <form action="">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
          </form>
          <p>You do have an account? Register</p>
        </div>
      </div>
    );
  };
  
  export default Login;
  