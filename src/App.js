import React, { useEffect, useState } from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "./routes/Search";
import Navbar from "./components/Navbar";
import useSWR from "swr";
import MovieView from "./routes/MovieView";
import ResultsNotFound from "./components/ResultsNotFound";
import PageNotFoud from "./routes/PageNotFoud";

// TMDB API KEY    c269583b385a845b4739e75bc1dc2de6
// search link  https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const App = () => {
  const [searchedText, setSearchedText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();

  const { data, error, isLoading } = useSWR(
    `https://api.themoviedb.org/3/search/movie?api_key=c269583b385a845b4739e75bc1dc2de6&query=${searchedText}&include_adult=false&language=en-US&page=1`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setSearchResult(data.results);
    }
  
  }, [data]);

  console.log(data);
  console.log(searchResult);

  return (
    <>
      <Navbar searchedText={searchedText} setSearchedText={setSearchedText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search
              isLoading={isLoading}
              keyword={searchedText}
              results={searchResult}
              setKeyword={setSearchedText}
            />
          }
        />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<PageNotFoud />} />
      </Routes>
    </>
  );
};

export default App;
