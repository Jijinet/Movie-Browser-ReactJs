import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import useSWR from "swr";
import Card from "../components/Card";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [homeResult, setHomeResult] = useState([]);

  const { data } = useSWR(
    `https://api.themoviedb.org/3/discover/movie?api_key=c269583b385a845b4739e75bc1dc2de6&include_adult=false&include_video=false&language=en-US&page=${pageIndex}&sort_by=popularity.desc`,
    fetcher
  );
  useEffect(() => {
    if (data) {
      setHomeResult(data.results);
    }
  }, [data]);

  return (
    <>
      <Hero content="Movie Browser" />
      <div className="container text-center">
        <div className="row align-items-start">
          {homeResult.map((movie) => (
            <Card
              key={movie.id}
              title={movie.original_title}
              image={
                movie.poster_path !== null
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : require("../img/not-found.jpg")
              }
              detailUrl={`/movies/${movie.id}`}
            />
          ))}
          <nav aria-label="Page navigation example">
            <ul className="pagination d-flex justify-content-center">
              <li className="page-item">
                <a
                  class="page-link"
                  href="#"
                  onClick={() => setPageIndex(pageIndex - 1)}
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  .
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  .
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  .
                </a>
              </li>

              <li className="page-item">
                <a
                  class="page-link"
                  href="#"
                  onClick={() => setPageIndex(pageIndex + 1)}
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Home;
