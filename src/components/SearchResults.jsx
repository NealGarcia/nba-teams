import React from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import "../styles/SearchResults.css";
import PlayerRow from "./PlayerRow";

function SearchResults({ setShowResults, showResults, playerData, searchValue }) {
  return (
    <div>
      <Offcanvas
        placement="start"
        show={showResults}
        onHide={() => {
          setShowResults(false);
        }}
      >
        <Offcanvas.Title className="panelHeader">
          <h3 className="headerTitle" id="search">
            Search Results
          </h3>
          <CloseIcon
            className="button"
            onClick={() => {
              setShowResults(false);
            }}
          />
        </Offcanvas.Title>
        <Offcanvas.Body>
          <Container className="searchResults">
            <Row>
              <Col className="results">
                Showing results for: <span>{searchValue}</span>
              </Col>
            </Row>
            {playerData.length !== 0 ? (
              playerData.map((player) => (
                <Row
                  className="playerRow"
                  key={player.id}
                >
                  <PlayerRow 
                    player={player}
                    />
                </Row>
              ))
            ) : (
              <div className="d-flex justify-content-center mt-5 mb-5">
                No Results Found
              </div>
            )}
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SearchResults;
