import React from 'react';
import SortBy from "./SortByComments";

const Filters = ({sortBy, onChangeSort}) => {
  return(
    <div className="filters">
      <SortBy sortBy={sortBy} onChangeSort={onChangeSort}/>
    </div>
  )
};

export default Filters;