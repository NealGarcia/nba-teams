import React from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress } from "@material-ui/core";

function Panel({ showPanel, setShowPanel, team, gameData }) {
  const teamName = team.name;

  return (
    <Offcanvas
      placement="end"
      show={showPanel}
      onHide={() => {
        setShowPanel(false);
      }}
      className="panel"
    >
      <Offcanvas.Title className="panelHeader">
        <h3 className="teamName">{teamName}</h3>
        <CloseIcon
          className="button"
          onClick={() => {
            setShowPanel(false);
          }}
        />
      </Offcanvas.Title>
      <Offcanvas.Body>
        {gameData.date != null ? (
          <Container>
            <Row>
              <Col>Team Full Name:</Col>
              <Col>{team.full_name}</Col>
            </Row>
            <Row>
              <Col>Total Games in 2021: </Col>
              <Col>{gameData.totalGames}</Col>
            </Row>
            <Row>
              <Col>
                <h6>Random Game Details:</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Date</h6>
              </Col>
              <Col>
                <h6>{gameData.date.substring(0, 10)}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Home Team</h6>
              </Col>
              <Col>
                <h6>{gameData.homeTeam}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Home Team Score</h6>
              </Col>
              <Col>
                <h6>{gameData.homeTeamScore}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Visitor Team</h6>
              </Col>
              <Col>
                <h6>{gameData.visitorTeam}</h6>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Visitor Team Score</h6>
              </Col>
              <Col>
                <h6>{gameData.visitorTeamScore}</h6>
              </Col>
            </Row>
          </Container>
        ) : (
          <CircularProgress />
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
