import React from 'react';

const BlogId = ({params}) => {
  console.log(params, 'params id');
  return <div>{JSON.stringify(params)}</div>;
};

export default BlogId;
