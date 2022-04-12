import React from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress } from "@material-ui/core";

function Panel({ showPanel, setShowPanel, team, gameData, highlight }) {
  const teamName = team.name;

  return (
    <Offcanvas
      placement="end"
      show={showPanel}
      onHide={() => {
        setShowPanel(false)
        highlight()
      }}
    >
      <Offcanvas.Title className="panelHeader">
        <h3 className="teamName">{teamName}</h3>
        <CloseIcon
          className="button"
          onClick={() => {
            setShowPanel(false)
            highlight()
          }}
        />
      </Offcanvas.Title>
      <Offcanvas.Body>
        {gameData.date != null ? (
          <Container className = "gameInfo">
            <Row>
              <Col className = "mt-4">Team Full Name:</Col>
              <Col className = "mt-4">{team.full_name}</Col>
            </Row>
            <Row>
              <Col className = "mt-4">Total Games in 2021: </Col>
              <Col className = "mt-4">{gameData.totalGames}</Col>
            </Row>
            <Row>
              <Col className = "mt-4">
                <p className = "gameDetails">Random Game Details:</p>
              </Col>
            </Row>
            <Row>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">Date</p>
              </Col>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">{gameData.date.substring(0, 10)}</p>
              </Col>
            </Row>
            <Row>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">Home Team</p>
              </Col>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">{gameData.homeTeam}</p>
              </Col>
            </Row>
            <Row>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">Home Team Score</p>
              </Col>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">{gameData.homeTeamScore}</p>
              </Col>
            </Row>
            <Row>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">Visitor Team</p>
              </Col>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">{gameData.visitorTeam}</p>
              </Col>
            </Row>
            <Row>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">Visitor Team Score</p>
              </Col>
              <Col className = "mt-4 ms-3">
                <p className = "gameDetails">{gameData.visitorTeamScore}</p>
              </Col>
            </Row>
          </Container>
        ) : (
        <div className="d-flex justify-content-center mt-5 mb-5">
          <CircularProgress />
        </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
