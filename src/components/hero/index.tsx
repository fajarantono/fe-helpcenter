import React from 'react';
import Image from 'next/image';
import IMGHero from '/public/illustration/il-cs-1.svg';

function closeWebView() {
  console.log('closed');
  window.postMessage('closeWebView', '*');
}

export default function Hero() {
  return (
    <>
      <div className="flex flex-col w-full mx-auto">
        {/* <div className="w-full fixed top-0 left-0 z-20 h-[60px]">
          <div className="shadow-[0_22px_23px_rgba(0,0,0,0.03)] text-lg bg-white w-full h-full px-5 max-w-bmw mx-auto flex items-center">
            <button onClick={closeWebView}>
              <svg
                className="mr-4 mb-1"
                width="10"
                height="17"
                viewBox="0 0 10 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 1L1 8.5L8.5 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              Pusat Bantuan
            </span>
          </div>
        </div> */}

        <div className="bg-[#00b0dc]">
          <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
            <div className="relative ml-auto">
              <div className="gap-12 md:flex md:items-center">
                <div className="text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
                  <h1 className="text-5xl font-black dark:text-white md:text-6xl xl:text-6xl">
                    Pusat Bantuan Klik Indonesia
                  </h1>
                  <div className="">
                    <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">
                      Kami siap membantu Anda menjelajahi fitur-fitur kami dengan mudah. Temukan
                      solusi cepat untuk pertanyaan Anda di sini!
                    </p>
                  </div>
                </div>
                <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
                  <div className="-ml-6 md:-mr-72 lg:mr-0">
                    <Image
                      className="h-full object-cover object-left"
                      src={IMGHero}
                      alt="heroIllustration"
                      width="1628"
                      height="1233"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
