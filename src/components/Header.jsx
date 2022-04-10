import React, { useState, useEffect } from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import axios from "axios";
import { API_URL_TEAMS, API_URL_GAMES } from '../config'

function Header(props) {
    const [search, setSearch] = useState("")
    const [data, setData] = useState("")

  return (
    <div className="mt-5" id = "container">
      <h1 className="title">NBA TEAMS</h1>
      <form className = "search">
          <div>
              <input type = "text" value = {search} onChange={(e) => setSearch(e.target.value)}/>
              <button type = "submit" className = "searchIcon">
                  <Search/>
              </button>
          </div>
      </form>
    </div>
  );
}

export default Header;
