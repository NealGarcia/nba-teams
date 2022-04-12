import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import { API_URL_PLAYERS } from "../config";
import PlayerDetailsModal from './PlayerDetailsModal';

function PlayerRow({ player, showResults, setShowResults }) {
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [playerDetailData, setPlayerDetailData] = useState([])

    const fetchPlayerDetailData = () => {
        fetch(`${API_URL_PLAYERS}/${player.id}`)
          .then((res) => res.json())
          .then((res) => {
            setPlayerDetailData(res);
          })
          .catch(console.error);
      };

    return (
        <div>
            <Col onClick = {() => {
                setShowDetailsModal(true)
                fetchPlayerDetailData()
            }}>
                    {player.first_name} {player.last_name}
             </Col>
             <PlayerDetailsModal
                setShowDetailsModal = {setShowDetailsModal}
                showDetailsModal = {showDetailsModal}
                playerDetailData = {playerDetailData}
             />
        </div>
    );
}

export default PlayerRow;