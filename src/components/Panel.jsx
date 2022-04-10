import React from "react";
import { Offcanvas } from "react-bootstrap";

function Panel({ showPanel, handleClose, teamData }) {

  return (
    <Offcanvas placement="end" show={showPanel} onHide={handleClose}>
      <Offcanvas.Header className="float-right" closeButton>
        <Offcanvas.Title>{teamData.name}</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
