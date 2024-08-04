/** @format */

import React from "react";
import CardMove from "./CardMove";
import Pagination from "./Pagination";

const MoviesLest = ({ DataMovies , moveing  , totalPages}) => {
  console.log(DataMovies.length);
  return (
    <div className="row mt-4">
      {DataMovies.length >= 1
        ? DataMovies.map((item) => {
            return <CardMove key={item.id} item={item} />;
        })
        :(<div class="alert alert-danger" role="alert">
            هناك خلل في الرابط لا يوجد افلام ...
        </div>)}
        {
            DataMovies.length >= 1 ? (
                <Pagination moveing = {moveing} totalPages = {totalPages}/>

            ) : null
        }
    </div>
  );
};

export default MoviesLest;
