import React from 'react';

const handleLoading = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Analytics');
    }, 1000);
  });
};

const Analytics = async () => {
  const data = await handleLoading();
  return (
    <div className="h-[200px] w-[200px] leading-[200px] text-center border border-[#acb] border-solid rounded">
      {data}
    </div>
  );
};

export default Analytics;
