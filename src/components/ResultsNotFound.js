import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

const ResultsNotFound = ({setKeyword}) => {
  const onClickHandler = ()=>{
    setKeyword('');
  }
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Results not found</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <Link to={'/'} className="btn btn-primary" onClick={onClickHandler}>
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ResultsNotFound;
