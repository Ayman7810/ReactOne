/** @format */

import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
const DitalesMovie = () => {
  const [Movie, setDataOneMovie] = useState([]);
  const pra = useParams();
  const getDitalesMovie = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${pra.id}?api_key=df350d9bd59aab33095f873f90daf980&language=ar`
    );
    setDataOneMovie(res.data);
    console.log(Movie);
  };
  useEffect(() => {
    getDitalesMovie();
  }, []);
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-12 mt-4">
          <div className="card-detalis d-flex align-items-center">
            <img
              src={"https://image.tmdb.org/t/p/w500" + Movie.poster_path}
              className="card-detalis"
              alt=""></img>
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-detalis border-bottom font fs-4">
                اسم الفليم : {Movie.title}
              </p>
              <p className="card-text-detalis border-bottom font fs-4">
                تاريخ الفليم : {Movie.release_date}
              </p>
              <p className="card-text-detalis border-bottom font fs-4">
                {" "}
                عدد المقيمين : {Movie.vote_count}
              </p>
              <p className="card-text-detalis border-bottom font fs-4">
                {" "}
                التقييم : {Movie.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 mt-3">
          <div className="card-story d-flex flex-column align-items-start">
            <div className="text-end p-4 pb-0">
              <p className="card-text-title  border-bottom">القصة : </p>
            </div>
            <div className="text-end px-4">
              <p className="card-text-details fs-5">{Movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 my-2 d-flex justify-content-center">
          <Link to={"/"}>
            <button
              className="btn btn-primary font mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}>
              العودة للرئيسية
            </button>
          </Link>
          <a href={Movie.homepage}>
            <button
              className="btn btn-primary font mx-2"
              style={{ backgroundColor: "#b45b35", border: "none" }}>
              مشاهدة الفلم
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DitalesMovie;
