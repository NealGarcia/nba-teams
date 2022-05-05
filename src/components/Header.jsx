import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import Search from "@material-ui/icons/Search";
import { API_URL_PLAYERS } from '../config'
import SearchResults from "./SearchResults";
import basketball from '../assets/basketball.png'

function Header(props) {
    const [searchValue, setSearchValue] = useState("")
    const [playerData, setPlayerData] = useState([])
    const [showResults, setShowResults] = useState(false)

  // Fetch player data from search value
  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = (searchValue) => {
    fetch(`${API_URL_PLAYERS}?search=${searchValue}`)
      .then((res) => res.json())
      .then((json) => {
        setPlayerData(json.data)
      })
      .catch(console.error)
  };

  return (
    <div className="mt-5" id = "container">
      <div className = "title">
        <h1 className="titleText">NBA TEAMS </h1>
        <img id = "logo" src = {basketball} alt = "logo"/>
      </div>
      <form className = "search" onSubmit={(e) => {
            e.preventDefault()
            fetchPlayerData(searchValue)
            setShowResults(true)
      }}>
            <input type = "text" placeholder = "Search Players" value = {searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
            <button type = "submit" className = "searchIcon">
                <Search/>
            </button>
      </form>
      <SearchResults
        setShowResults={setShowResults}
        showResults={showResults}
        playerData={playerData}
        searchValue = {searchValue}
      />
    </div>
  );
}

export default Header;
