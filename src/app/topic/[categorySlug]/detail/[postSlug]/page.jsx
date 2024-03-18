'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const page = ({ params: { postSlug } }) => {
  const router = useRouter();
  const [detail, setDetail] = useState([]);

  const getPopularPost = async () => {
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/global/blog/getPostDetail?postSlug=${postSlug}`
      );
      if (resp.data.success) {
        setDetail(resp.data.results);
      } else {
        console.log('Error Categories', resp);
      }
    } catch (error) {
      console.log('Error Categories', error);
    }
  };

  useEffect(() => {
    getPopularPost();
  }, []);

  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };

  return (
    <>
      <div className="flex flex-col pt-[60px] w-full mx-auto">
        <div className="w-full fixed top-0 left-0 z-20 h-[60px]">
          <div className="shadow-[0_22px_23px_rgba(0,0,0,0.03)] text-lg bg-white w-full h-full px-5 max-w-bmw mx-auto flex items-center">
            <button className="cursor-pointer" onClick={handleBack}>
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
              Artikel
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="px-4 py-6 rounded-t-3xl bg-white">
          <h1 className="text-2xl font-bold m-0 mb-4">{detail.postTitle}</h1>
          <div className="prose" dangerouslySetInnerHTML={{ __html: detail.postContent }} />
        </div>
      </div>
    </>
  );
};

export default page;
