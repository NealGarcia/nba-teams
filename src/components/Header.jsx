import React from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";

const styles = {
    customForm: {
        border: '#074684',
    }
};

function Header(props) {
  return (
    <div className="mt-5" id = "container">
      <h1 className="title">NBA TEAMS</h1>
      <form className = "search">
          <div>
              <input type = "text"/>
              <button type = "submit" className = "searchIcon">
                  <Search/>
              </button>
          </div>
      </form>
    </div>
  );
}

export default Header;
