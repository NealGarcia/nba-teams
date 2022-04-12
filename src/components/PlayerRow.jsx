import React, { useState } from 'react';
import { Col } from "react-bootstrap";
import { API_URL_PLAYERS } from "../config";
import PlayerDetailsPanel from './PlayerDetailsPanel';

function PlayerRow({ player, showResults, setShowResults }) {
    const [showDetailsPanel, setShowDetailsPanel] = useState(false)
    const [playerDetailData, setPlayerDetailData] = useState([])

    const fetchPlayerDetailData = () => {
        fetch(`${API_URL_PLAYERS}/${player.id}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setPlayerDetailData(res);
          })
          .catch(console.error);
      };

    return (
        <div>
            <Col onClick = {() => {
                setShowDetailsPanel(true)
                fetchPlayerDetailData()
                console.log("test success")
            }}>
                    {player.first_name} {player.last_name} {player.id}
             </Col>
             <PlayerDetailsPanel
                setShowDetailsPanel = {setShowDetailsPanel}
                showDetailsPanel = {showDetailsPanel}
                player = {player}
                playerDetailData = {playerDetailData}
             />
        </div>
    );
}

export default PlayerRow;