import React from "react";
import { Modal, Container, Row, Col } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress } from "@material-ui/core";
import "./PlayerDetailsModal.css";

function PlayerDetailsModal({ setShowDetailsModal, showDetailsModal, playerDetailData }) {
  return (
    <Modal
      show={showDetailsModal}
      onHide={() => {
        setShowDetailsModal(false);
      }}
    >
      <Modal.Header className = "modalHeader">
        <Modal.Title className="modalTitle">
          {playerDetailData.first_name} {playerDetailData.last_name}
        </Modal.Title>
        <CloseIcon
          className="closeButton"
          onClick={() => {
            setShowDetailsModal(false);
          }}
        />
      </Modal.Header>
      <Modal.Body>
      {playerDetailData.first_name !== undefined ? (
        <Container className = "mb-3">
          <Row className = "mb-3">
            <Col>Team:</Col>
            <Col> {playerDetailData.team.full_name}</Col>
          </Row>
          <Row className = "mb-3">
            <Col>Position: </Col>
            <Col>{playerDetailData.position}</Col>
          </Row>
          <Row className = "mb-3">
            <Col>Height:</Col>
            <Col>{playerDetailData.height_feet} feet,{" "}
              {playerDetailData.height_inches} inches
            </Col>
          </Row>
          <Row className = "mb-3">
            <Col>Weight:</Col>
            <Col>{playerDetailData.weight_pounds} lbs</Col>
          </Row>
        </Container>
        ) : (
            <div className="d-flex justify-content-center mt-5 mb-5">
              <CircularProgress />
            </div>
            )}
      </Modal.Body>
    </Modal>
  );
}

export default PlayerDetailsModal;
