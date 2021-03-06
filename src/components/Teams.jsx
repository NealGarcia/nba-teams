import React, { useState, useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { Table } from "react-bootstrap";
import { API_URL_TEAMS } from "../config";
import _, { indexOf } from "lodash";
import "../styles/Teams.css";
import TeamRow from "./TeamRow";

// Number of results per page
const pageSize = 7;

function Teams(props) {
  const [data, setData] = useState([]);
  const [paginatedData, setPaginatedData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [icon, setIcon] = useState(false)

  // Fetch teams data from API
  useEffect(() => {
    fetchTeamData();
  }, []);

  const fetchTeamData = () => {
    fetch(API_URL_TEAMS)
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
        setPaginatedData(_(json.data).slice(0).take(pageSize).value());
      })
      .catch(console.error);
  };

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

  // Page sort function sets state of paginated data to reversed data array
  const sort = () => {
    setData(data.reverse())
    setPaginatedData(_(data).slice(0).take(pageSize).value())
    setCurrentPage(1)
  }


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
        <thead className="tableHead" >
          <tr>
            <th className="pt-3 pb-3">Team Name</th>
            <th className="pt-3 pb-3">City
            {icon ? <MdOutlineArrowDropUp
              className = "sortIcon"
              onClick={() => {
                setIcon(false)
                sort()
              }}

            /> 
            : 
            <MdOutlineArrowDropDown
            className = "sortIcon"
            onClick={() => {
              setIcon(true)
              sort()
            }}
            />}
            </th>
            <th className="pt-3 pb-3">Abbreviation</th>
            <th className="pt-3 pb-3">Conference</th>
            <th className="pt-3 pb-3">Division</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through data and display row & data for each team */}
          {paginatedData.map((team) => (
            <TeamRow team={team} key={team.id} />
          ))}
        </tbody>
      </Table>

      {/* Display Pagination buttons */}
      <nav className = "mt-4">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <p className="page-link" onClick={() => pagination(page)}>
                {page}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Teams;
