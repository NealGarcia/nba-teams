import React, { useState, useEffect } from "react";
import { Offcanvas } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from "@material-ui/icons/Close";
import { API_URL_GAMES } from "../config";



function Panel({ showPanel, handleClose, teamData }) {
  const [gameData, setGameData] = useState([]);

  const teamName = teamData.name
  const teamId = teamData.id

  // Fetch game data from API
  useEffect(() => {
    fetch(`${API_URL_GAMES}?seasons[]=2021&team_ids[]=${teamId}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(gameData);
        setGameData(json.data);
      })
      .catch(console.error);
  }, []);




  return (
    <Offcanvas placement="end" show={showPanel} onHide={handleClose} className = "panel">
      <Offcanvas.Title className = "panelHeader">
        <h3 className = "teamName">{teamName}</h3>
        <CloseIcon className="button" onClick={handleClose} />
      </Offcanvas.Title>
      <Offcanvas.Body>
        <p>TEst</p>






      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
 