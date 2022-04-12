import React, { useState } from "react";
import GamePanel from "./GamePanel";
import { API_URL_GAMES } from "../config";

function TeamRow({ team }) {
  const [showPanel, setShowPanel] = useState(false);
  const [gameData, setGameData] = useState({});
  const [highlighted, setHighlighted] = useState(false)

  const fetchGameData = () => {
    fetch(`${API_URL_GAMES}?seasons[]=2021&team_ids[]=${team.id}`)
      .then((res) => res.json())
      .then((res) => {
        setGameData({
          totalGames: res.meta.total_count,
          date: res.data[0].date,
          homeTeam: res.data[0].home_team.name,
          homeTeamScore: res.data[0].home_team_score,
          visitorTeam: res.data[0].visitor_team.name,
          visitorTeamScore: res.data[0].visitor_team_score,
        });
      })
      .catch(console.error);
  };

  const highlight = () => {
    setHighlighted(!highlighted)
  }

  return (
    <>
      <tr
        className = "rounded mb-4"
        style = {{backgroundColor: !highlighted ? '#fdf8fd' : '#dce0e3'}}
        onClick={() => {
          setShowPanel(true);
          fetchGameData();
          highlight()
        }}
      >
        <td className="pt-4 pb-3">{team.name}</td>
        <td className="pt-4 pb-3">{team.city}</td>
        <td className="pt-4 pb-3">{team.abbreviation}</td>
        <td className="pt-4 pb-3">{team.conference}</td>
        <td className="pt-4 pb-3">{team.division}</td>
      </tr>
      <GamePanel
        setShowPanel={setShowPanel}
        showPanel={showPanel}
        team={team}
        gameData={gameData}
        highlight={highlight}
      />
    </>
  );
}

export default TeamRow;
