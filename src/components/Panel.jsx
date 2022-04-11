import React, { useState, useEffect } from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from "@material-ui/icons/Close";
import { API_URL_GAMES } from "../config";



function Panel({ showPanel, handleClose, teamData }) {
  const [gameData, setGameData] = useState([]);

  const teamName = teamData.name
  const teamId = teamData.id

  // Fetch game data from API using team ID
  useEffect(() => {
    fetch(`${API_URL_GAMES}?seasons[]=2021&team_ids[]=${teamId}`)
      .then((res) => res.json())
      .then((res) => {
        setGameData(res);
        console.log(gameData);
      })
      .catch(console.error);
  }, []);

  const totalGames = gameData.meta.total_count

  return (
    <Offcanvas placement="end" show={showPanel} onHide={handleClose} className = "panel">
      <Offcanvas.Title className = "panelHeader">
        <h3 className = "teamName">{teamName}</h3>
        <CloseIcon className="button" onClick={handleClose} />
      </Offcanvas.Title>
      <Offcanvas.Body>
    
        <Container>
          <Row>
            <Col>Team Full Name:</Col>
            <Col>{teamData.full_name}</Col>
          </Row>
          <Row>
            <Col>Total Games in 2021: </Col>
            <Col>{totalGames}</Col>
          </Row>
        </Container>







      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
 