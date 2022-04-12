import React from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";

import "./PlayerDetailsPanel.css";

function PlayerDetailsPanel({ setShowDetailsPanel, showDetailsPanel, player, playerDetailData, }) {
  return (
    <Modal
      show={showDetailsPanel}
      onHide={() => {
        setShowDetailsPanel(false);
      }}
    >
      <Modal.Header>
        <Modal.Title className="modalTitle">
          {playerDetailData.first_name} {playerDetailData.last_name}
        </Modal.Title>
        <CloseIcon
          className="closeButton"
          onClick={() => {
            setShowDetailsPanel(false);
          }}
        />
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Row>
                <Col>Team: {playerDetailData.team.full_name}</Col>
            </Row>
            <Row>
                <Col>Position: {playerDetailData.position}</Col>
            </Row>
            <Row>
                <Col>Height: {playerDetailData.height_feet} feet, {playerDetailData.height_inches} inches</Col>
            </Row>
            <Row>
                <Col>Weight: {playerDetailData.weight_pounds} pounds</Col>
            </Row>
        </Container>

      </Modal.Body>



    
    </Modal>
  );
}

export default PlayerDetailsPanel;
