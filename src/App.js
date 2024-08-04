/** @format */

import React, { useEffect, useState } from "react";
import Nav from "./Component/Nav";
import MoviesLest from "./Component/MoviesLest";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DitalesMovie from "./Component/DitalesMovie";

const App = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  // get data movies
  const getDataMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=df350d9bd59aab33095f873f90daf980&language=ar&page=1"
    );
    setDataMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };
  // search movie
  const SearchMovie = async (word) => {
    if (word === "") {
      getDataMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=df350d9bd59aab33095f873f90daf980&query=${word}&language=ar`
      );
      setDataMovies(res.data.results);
      setTotalPages(res.data.total_pages);
    }
  };

  // moveing between pages movies via pagination
  const moveing = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=df350d9bd59aab33095f873f90daf980&language=ar&page=${page}`
    );
    setDataMovies(res.data.results);
    setTotalPages(res.data.total_pages);
  };

  // useEffect
  useEffect(() => {
    getDataMovies();
  }, []);
  return (
    <div>
      <Nav SearchMovie={SearchMovie} />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesLest
                  DataMovies={dataMovies}
                  moveing={moveing}
                  totalPages={totalPages}
                />
              }
            />
            <Route path="/movie/:id" element={<DitalesMovie/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
