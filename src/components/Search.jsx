import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lfq10Y4d1zOMcd_dvEw80AHaGR%26pid%3DApi&f=1&ipt=9cfdfffcc81b010e5f8fa7e80567a119d75dc2f467523dd1625eb7d271b1e47f&ipo=images"
          alt=""
        />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
