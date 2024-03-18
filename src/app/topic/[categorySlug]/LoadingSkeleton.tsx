import React from 'react';

const SkeletonLoading = () => {
  const dummyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      {dummyData.map((index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-md animate-pulse h-[10px] m-5"></div>
      ))}
    </>
  );
};

export default SkeletonLoading;
