import React from 'react';

const Category = ({ match }) => {
  return <div>{match.params.category}</div>;
};

export default Category;
