'use client';

import React, { useEffect, useState } from 'react';
import { getAllCategories } from '@/api/public';
import { TopicList } from './topic-list';
import { ICategory } from '@/types/category';
import { Skeleton } from './skeleton';
import ErrorModal from '@/components/modals/errorModal';

export const Topic = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategories();
        const data = response?.data;
        if (!data) throw new Error('Failed to fetch data');
        if (data?.success) {
          setCategories(data.results || []);
        } else {
          throw new Error('Failed to fetch categories. Please try again later.');
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

    fetchData();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Topik
        </h2>
        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Pilih topik berdasarkan masalahmu</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 pb-8 gap-4">
        {categories.map((item: ICategory) => {
          return (
            <TopicList
              key={item.categoryId}
              icon={item.categoryIcon}
              label={item.categoryName}
              slug={item.categorySlug}
            />
          );
        })}
      </div>
      {showModal && <ErrorModal message={error || ''} onClose={closeModal} />}
    </div>
  );
};
