import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { Table } from "react-bootstrap";
import { API_URL_TEAMS, API_URL_GAMES } from "../config";
import _ from "lodash";
import "./Teams.css";
import Panel from "./Panel";

// Number of results per page
const pageSize = 7;

function Teams(props) {
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [showPanel, setShowPanel] = useState(false);
  const [teamData, setTeamData] = useState({})
  const [gameData, setGameData] = useState({})

  // Fetch teams data from API
  useEffect(() => {
    fetchTeamData()
  }, []);

  const fetchTeamData = () => {
    fetch(API_URL_TEAMS)
    .then((res) => res.json())
    .then((json) => {
      console.log(json.data);
      setData(json.data);
      setPaginatedData(_(json.data).slice(0).take(pageSize).value());
    })
    .catch(console.error);
  }

  const fetchGameData = () => {
    const url = `${API_URL_GAMES}?seasons[]=2021&team_ids[]=${teamData.id}`
    console.log(url)
    fetch(`${API_URL_GAMES}?seasons[]=2021&team_ids[]=${teamData.id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setGameData({
          totalGames: res.meta.total_count,
          date: res.data[0].date,
          homeTeam: res.data[0].home_team.name,
          homeTeamScore: res.data[0].home_team_score,
          visitorTeam: res.data[0].visitor_team.name,
          visitorTeamScore: res.data[0].visitor_team_score
        });
      })
      .catch(console.error);
  }

  // Calculate # of pages
  const pageCount = data ? Math.ceil(data.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination = (pageNum) => {
    setCurrentPage(pageNum);
    const startIndex = (pageNum - 1) * pageSize;
    const paginatedData = _(data).slice(startIndex).take(pageSize).value();
    setPaginatedData(paginatedData);
  };

  // If data equals undefined (not yet loaded) render loading animation
  if (data === undefined || paginatedData === undefined)
    return (
      <div className="d-flex justify-content-center mt-5 mb-5">
        <CircularProgress />
      </div>
    );

  return (
    <div className="teams">
      <Table responsive="xl" hover className="table">
        <thead className="tableHead">
          <tr>
            <th className="pt-3 pb-3">Team Name</th>
            <th className="pt-3 pb-3">City</th>
            <th className="pt-3 pb-3">Abbreviation</th>
            <th className="pt-3 pb-3">Conference</th>
            <th className="pt-3 pb-3">Division</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data and display row & data for each team */}
          {paginatedData.map((team) => (
            <tr onClick={()=>{
              setShowPanel(true)
              setTeamData(team)
              fetchGameData()
            }} key={team.id}>
              <td className="pt-3 pb-3">{team.name}</td>
              <td className="pt-3 pb-3">{team.city}</td>
              <td className="pt-3 pb-3">{team.abbreviation}</td>
              <td className="pt-3 pb-3">{team.conference}</td>
              <td className="pt-3 pb-3">{team.division}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Display Pagination buttons */}
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>

      <Panel
        setShowPanel = {setShowPanel}
        showPanel={showPanel}
        teamData={teamData}
        gameData={gameData}
      />
    </div>
  );
}

export default Teams;
