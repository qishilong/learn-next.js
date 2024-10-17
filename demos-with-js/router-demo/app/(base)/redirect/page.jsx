import React from 'react';
import {redirect} from 'next/navigation';

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 2000);
  });
};

const Redirect = async () => {
  const data = await getData();
  if (data) {
    redirect('/');
  }
  return (
    <div className="flex gap-8">
      <span>span</span>
      <span>Redirect</span>
    </div>
  );
};

export default Redirect;
