import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { Table } from "react-bootstrap";
import { API_URL_TEAMS } from "../config";
import "./Teams.css";

function Teams(props) {
  const [data, setData] = useState([]);

  // Fetch data from API
  useEffect(() => {
    fetch(API_URL_TEAMS)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      })
      .catch(console.error);
  }, []);

  console.log(data);

  return (
    <div className="teams">
      <Table responsive hover className="table">
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
          {data.map((team) => (
            <tr>
              <td>{team.name}</td>
              <td>{team.city}</td>
              <td>{team.abbreviation}</td>
              <td>{team.conference}</td>
              <td>{team.division}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Teams;
