import React from 'react';

const Spinner = () => {
    console.log("Loading")
  return (
    <div className="flex justify-center items-center h-full">
      <span className="loading loading-spinner loading-lg text-success"></span>
    </div>
  );
};

export default Spinner;