import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-linear-to-br from-black via-gray-900 to-purple-950 text-white">
      <title>Error404</title>
      <p className="text-xl">Error 404</p>
      <p>Page Not Found!</p>
      <Link to={-1} className="btn btn-outline btn-primary rounded-full mt-5">
        Go Back
      </Link>
    </div>
  );
};

export default Error404;
