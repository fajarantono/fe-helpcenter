import React from 'react';

const SkeletonLoading = () => {
  return (
    <>
      <div className="flex flex-col">
        <section className="scroll-m-10 bg-white py-20">
          <div className="container mx-auto flex text-center justify-center">
            <div className="w-full lg:w-full xl:w-7/12 ml-0 ">
              <div className="bg-gray-200 p-4 rounded-md animate-pulse h-[70px] mb-20 mx-20"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 pb-8 gap-4 w-11/12 container mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-md animate-pulse h-[100px]"></div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SkeletonLoading;
