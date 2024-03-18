'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import LoadingSkeleton from './LoadingSkeleton';
import ErrorModal from '@/components/modals/errorModal';

interface TopicProps {
  params: {
    categorySlug: string;
  };
}

interface TopicData {
  postId: string;
  postTitle: string;
  postSlug: string;
}

const Topic: React.FC<TopicProps> = ({ params }) => {
  const { categorySlug } = params;

  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState<TopicData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const getData = async () => {
    try {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/global/blog/getBlogPost?categorySlug=${categorySlug}`
      );
      if (resp.data.success) {
        setTopics(resp.data.results);
      } else {
        setError('Failed to fetch categories. Please try again later.');
        setShowModal(true);
      }
    } catch (error: any) {
      if (error.message === 'Network Error') {
        setError('You are offline. Please check your internet connection.');
      } else {
        setError('An error occurred while fetching categories. Please try again later.');
      }
      setShowModal(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [categorySlug]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex flex-col pt-[60px] w-full mx-auto">
        <div className="w-full fixed top-0 left-0 z-20 h-[60px]">
          <div className="shadow-[0_22px_23px_rgba(0,0,0,0.03)] text-lg bg-white w-full h-full px-5 max-w-bmw mx-auto flex items-center">
            <Link href="/">
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
            </Link>
            <span className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
              {categorySlug}
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="my-6">
          <h3 className="font-bold text-black mb-1 text-lg px-4 xl:text-2xl">Topik Pencarian</h3>
        </div>

        <div className="bg-white w-full">
          {loading ? (
            <LoadingSkeleton />
          ) : (
            topics?.map((item) => (
              <Link
                href={`/topic/${categorySlug}/detail/${item.postSlug}`}
                key={item.postId}
                className="group text-black-bekko no-underline font-medium py-2 px-4 m-0 flex items-center w-full text-left bg-transparent cursor-pointer hover:bg-gray-100 active:bg-gray-100"
              >
                <span className="flex w-full justify-between items-center border-b border-b-light-grey min-h-[40px] -my-2 mx-0 py-4 px-0 group-first:border-t group-first:border-t-light-grey group-last:border-b group-last:border-b-light-grey">
                  {item.postTitle}
                  <div className="mr-2 ml-6 flex-shrink-0 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  </div>
                </span>
              </Link>
            ))
          )}
        </div>
        {showModal && <ErrorModal message={error || ''} onClose={closeModal} />}
      </div>
    </>
  );
};

export default Topic;
