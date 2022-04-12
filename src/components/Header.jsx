import React, { useState, useEffect } from "react";
import "./Header.css";
import Search from "@material-ui/icons/Search";
import { API_URL_PLAYERS } from '../config'
import Select from 'react-select'

function Header(props) {
    const [searchValue, setSearchValue] = useState("")
    const [selectedValue, setSelectedValue] = useState(null);
    const [playerData, setPlayerData] = useState({})

  // Fetch player data
  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = (searchValue) => {
    fetch(`${API_URL_PLAYERS}?search=${searchValue}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.data);
        setPlayerData(json.data);
      })
      .catch(console.error);
  };

  const handleInputChange = value => {
    setSearchValue(value);
  };

  const handleChange = value => {
    setSelectedValue(value);
  }


  return (
    <div className="mt-5" id = "container">
      <h1 className="title">NBA TEAMS</h1>
      <form className = "search" onSubmit={(e) => {
            e.preventDefault()
            fetchPlayerData(searchValue)
      }}>
            <input type = "text" value = {searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button type = "submit" className = "searchIcon">
                <Search/>
            </button>
      </form>
      
            {searchValue}
    </div>
  );
}

export default Header;
