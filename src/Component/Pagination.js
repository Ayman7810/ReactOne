/** @format */

import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({moveing , totalPages}) => {
  const pageCount = totalPages;
  const handelPageClick = (data) => {
    // console.log(data.selected + 1)
    moveing (data.selected + 1)
  };
  return (
    
    <div className="row  my-4 font">
      <div className="col-12">
        <ReactPaginate
          breakLabel="..."
          nextLabel="التالي"
          pageRangeDisplayed={3}
          previousLabel="السابق"
          marginPagesDisplayed={2}
          pageCount={pageCount}
          onPageChange={handelPageClick}
          containerClassName="pagination justify-content-center"
          pageClassName={"page-item"}
          pageLinkClassName={'page-link fs-5'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link fs-5'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link fs-5'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link fs-5'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

export default Pagination;
