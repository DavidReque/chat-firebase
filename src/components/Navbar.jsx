import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  function logOutClick() {
    signOut(auth)
  }

  return (
    <div className="navbar">
      <span className="logo">David Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={logOutClick}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

