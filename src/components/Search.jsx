import React, { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Search = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setUserName(value);
  }

  async function handleSearch() {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      console.error(error);
      setErr(true);
    }
  }

  function handleKey(e) {
    e.code === "Enter" && handleSearch();
  }

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={handleChange}
          onKeyDown={handleKey}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && <div className="userChat">
        <img
          src={user.photoURL}
          alt=""
        />
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  );
};

export default Search;
