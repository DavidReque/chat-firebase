import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Spinner from "../components/Spinner";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
      setLoading(false)
    } catch (error) {
      console.error(error);
      setErr(true);
      setLoading(false)
    }
  }

  return (
    <div className="formContainer">
      {loading ? (
        <Spinner />
      ) : (
        <div className="formWrapper">
          <span className="logo">David Chat</span>
          <span className="title">Login</span>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign in</button>
            {err && <span style={{ color: "red" }}>Someting went wrong</span>}
          </form>
          <p>
            You do have an account?{" "}
            <Link to="/register" className="pForm">
              Register
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
