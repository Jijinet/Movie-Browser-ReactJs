import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import ResultsNotFound from "../components/ResultsNotFound";

const Search = ({ keyword, results, isLoading,setKeyword }) => {
  const content = `You are searching for ${keyword}`;

  return (
    <>
      <Hero content={isLoading ? "Loading..." : content} />
      {!isLoading && results.length==0 && keyword!=='' ? (
        <ResultsNotFound setKeyword={setKeyword} />
      ) : (
        <div class="container border border-danger-subtle">
          <div class="row border border-success ">
            {results.map((movie, i) => (
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
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
