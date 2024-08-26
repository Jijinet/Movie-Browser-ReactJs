import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, image, detailUrl }) => {

  return (
    <div class="col-lg-3 col-md-4 col-sm-6 text-center col-12 my-4 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={image}
          className="card-img-top"
          style={{ height: "400px" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
