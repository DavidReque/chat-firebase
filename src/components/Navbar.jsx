import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Spinner from './Spinner'

const Navbar = () => {

  const [loading, setLoading] = useState(false)

  const { currentUser } = useContext(AuthContext)

  async function logOutClick() {
    try {
      setLoading(true)
      await signOut(auth)
    } catch (error) {
      console.error(error);
      setLoading(false)
    }
  }

  return (
    <div className="navbar">
      <span className="logo">David Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={logOutClick}>{loading ? <Spinner/> : 'Logout'}</button>
      </div>
    </div>
  );
}

export default Navbar;

