import React from 'react';

export const Skeleton = () => {
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <div className="bg-gray-200 p-4 rounded-md animate-pulse h-[50px] mb-5 mx-20"></div>
        <div className="bg-gray-200 p-4 rounded-md animate-pulse h-[20px] mb-20 mx-20"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 pb-8 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-md animate-pulse h-[100px]"></div>
        ))}
      </div>
    </div>
  );
};
