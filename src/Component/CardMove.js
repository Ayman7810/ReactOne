/** @format */

import React from "react";
import { Link } from "react-router-dom";

const CardMove = ({ item }) => {

  return (
    <div className="col-md-3 col-sm-6 col-12 py-2">
        <Link to={`/movie/${item.id}`}>
        <div className="card">
        <img
          src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
          className="card__image"
          alt=""
        />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 font">
            <p>اسم الفلم : {item.title}</p>
            <p>تاريخ الاصدار : {item.release_date}</p>
            <p>التقييم : {item.vote_average}</p>
            <p>عدد المقيمين : {item.vote_count}</p>
          </div>
        </div>
      </div>
        </Link>
      
    </div>
  );
};

export default CardMove;
