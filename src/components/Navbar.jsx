import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const Navbar = () => {

  function logOutClick() {
    signOut(auth)
  }

  return (
    <div className="navbar">
      <span className="logo">David Chat</span>
      <div className="user">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lfq10Y4d1zOMcd_dvEw80AHaGR%26pid%3DApi&f=1&ipt=9cfdfffcc81b010e5f8fa7e80567a119d75dc2f467523dd1625eb7d271b1e47f&ipo=images" alt="" />
        <span>David</span>
        <button onClick={logOutClick}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;

