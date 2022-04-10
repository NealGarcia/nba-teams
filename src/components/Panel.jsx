import React from "react";
import { Offcanvas } from "react-bootstrap";
import "./Panel.css";
import CloseIcon from '@material-ui/icons/Close';

function Panel({ showPanel, handleClose, teamData }) {

  return (
    <Offcanvas placement="end" show={showPanel} onHide={handleClose}>
      <Offcanvas.Title>
          {teamData.name}
          <CloseIcon
            className = "button"
            onClick = {handleClose}
          />
          </Offcanvas.Title>
      <Offcanvas.Body>
        Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc.
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Panel;
