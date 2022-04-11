import React, { useState, useEffect } from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from "@material-ui/icons/Close";
import { API_URL_GAMES } from "../config";
import { CircularProgress } from "@material-ui/core";

function Panel({ showPanel, handleClose, teamData }) {
  const [gameData, setGameData] = useState({
    totalGames: null,
    date: null,
    homeTeam: null,
    homeTeamScore: null,
    visitorTeam: null,
    visitorTeamScore: null,
  });

  const teamName = teamData.name

  // Fetch game data from API using team ID
  useEffect(() => {
    fetch(`${API_URL_GAMES}?seasons[]=2021&team_ids[]=${teamData.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data[0])
        setGameData({
          totalGames: res.meta.total_count,
          date: res.data[0].date,
          homeTeam: res.data[0].home_team.name,
          homeTeamScore: res.data[0].home_team_score,
          vistorTeam: res.data[0].visitor_team.name,
          visitorTeamScore: res.data[0].visitor_team_score
        });
        console.log(gameData);
      })
      .catch(console.error);
  }, []);

  if (gameData === undefined)
    return (
      <div className="d-flex justify-content-center mt-5 mb-5">
        <CircularProgress />
      </div>
    );


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
            <Col>{gameData.totalGames}</Col>
          </Row>
          <Row>
            <Col><h6>Random Game Details:</h6></Col>
          </Row>
          <Row>
            <Col><h6>Date</h6></Col>
            <Col><h6>  </h6></Col>
          </Row>
          <Row>
            <Col><h6>Home Team</h6></Col>
            <Col><h6>  </h6></Col>
          </Row>
          <Row>
            <Col><h6>Home Team Score</h6></Col>
            <Col><h6>  </h6></Col>
          </Row>
          <Row>
            <Col><h6>Visitor Team</h6></Col>
            <Col><h6>  </h6></Col>
          </Row>
          <Row>
            <Col><h6>Visitor Team</h6></Col>
            <Col><h6>  </h6></Col>
          </Row>
        </Container>







      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
 