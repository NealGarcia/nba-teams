import React from "react";
import { Offcanvas, Container, Row, Col } from "react-bootstrap";
import CloseIcon from "@material-ui/icons/Close";
import { CircularProgress } from "@material-ui/core";
import "./SearchResults.css";

function SearchResults({ setShowResults, showResults, playerData, searchValue }) {
    console.log(playerData)
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
          <h3 className = "headerTitle" id = "search">Search Results</h3>
          <CloseIcon
            className="button"
            onClick={() => {
              setShowResults(false);
            }}
          />
        </Offcanvas.Title>
        <Offcanvas.Body>
        {playerData !== 0 !== "" ? (
            <Container className = "searchResults">
                <Row>
                    <Col className = "results">Showing results for: <span>{searchValue}</span></Col>
                </Row>
                {playerData.map((player) => (
                    <Row className = "playerRow">
                        <Col>{player.first_name} {player.last_name}</Col>
                    </Row>
                ))}
            </Container>
        ):(
            <div className="d-flex justify-content-center mt-5 mb-5">
          No Results Found
        </div>
        )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default SearchResults;
