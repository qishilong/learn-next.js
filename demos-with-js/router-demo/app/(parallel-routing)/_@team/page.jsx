import React from 'react';

const handleLoading = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Team');
    }, 1000);
  });
};

const Team = async () => {
  const data = await handleLoading();
  // if (data) {
  //   return Error();
  // }
  return (
    <div className="h-[200px] w-[200px] leading-[200px] text-center border border-[#abc] border-solid rounded">
      {data}
    </div>
  );
};

export default Team;
