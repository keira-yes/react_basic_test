import React from 'react';

const SortBy = ({sortBy, onChangeSort, options}) => {
  return (
    <select name="sortBy" value={sortBy} onChange={onChangeSort}>
      {options.map(item => {
        return <option key={item.value} value={item.value}>{item.label}</option>
      } )}
    </select>
  )
};

export default SortBy;

SortBy.defaultProps = {
  options: [
    {
      label: 'More comments',
      value: 'comments_desc'
    },
    {
      label: 'Less comments',
      value: 'comments_asc'
    }
  ]
};