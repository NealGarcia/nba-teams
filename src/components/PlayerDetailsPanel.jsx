import React from 'react';
import { Modal } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress } from "@material-ui/core";

import "./PlayerDetailsPanel.css";


function PlayerDetailsPanel({ setShowDetailsPanel, showDetailsPanel, player, playerDetailData }) {
    return (
        <Modal
            show = {showDetailsPanel}
            onHide = {() => {
                setShowDetailsPanel(false)
            }}
        >
            <Modal.Header>
                <Modal.Title className = "modalTitle">{playerDetailData.first_name} {playerDetailData.last_name}</Modal.Title>
                <CloseIcon
          className="closeButton"
          onClick={() => {
            setShowDetailsPanel(false)
          }}
        />
            </Modal.Header>
        </Modal>
    )
}

export default PlayerDetailsPanel;