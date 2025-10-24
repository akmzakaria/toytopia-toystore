import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] m-auto bg-linear-to-br from-black via-gray-900 to-purple-950">
      <span className="loading loading-spinner w-10"></span>
    </div>
  );
};

export default Loading;
