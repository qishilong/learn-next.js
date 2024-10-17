'use client';

import {useState} from 'react';

// import {use} from 'react';

// async function getData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return {
//     message: 'Hello, Dashboard!',
//   };
// }

const DashBoard = () => {
  // const {message} = use(getData());
  // return <div>{message}</div>;

  const [error, setError] = useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return error ? Error() : <button onClick={handleGetError}>Get Error</button>;
};

export default DashBoard;
