import React from 'react';

const BlogSlug = ({params}) => {
  console.log(params, 'params slug');
  return <div>{JSON.stringify(params)}</div>;
};

export default BlogSlug;
