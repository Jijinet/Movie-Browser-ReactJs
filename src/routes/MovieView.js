import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import useSWR from "swr";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  console.log(id);
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?api_key=c269583b385a845b4739e75bc1dc2de6&language=en-US`,
    fetcher
  );

  const Backdrop = () => {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col g-0 position-relative">
            <h1 className="text-light mx-5 position-absolute top-50 start-0 translate-middle-y">{data.original_title}</h1>
            <img
              src={data.backdrop_path !== null ? `https://image.tmdb.org/t/p/w500${data.backdrop_path}` : require("../img/image-not-found.jpg")}
              alt="..."
              className="object-fit-cover"
              style={{height:'200px',width:'100%'}}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {data && (
        <>
          <Backdrop />
          <div className=" container-fluid">
            <div className="row m-5">
              <div className="col-md-2">
                <img
                  src={data.poster_path!==null ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : require("../img/not-found.jpg")}
                  className="img-fluid rounded shadow"
                  style={{height:'300px'}}
                  alt="..."
                />
              </div>
              <div className="col-md-9">
                <div className="card-body">
                  <h3 className="card-title fw-bolder">
                    {data.original_title}
                  </h3>
                  <p className="card-text my-3">{data.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieView;
