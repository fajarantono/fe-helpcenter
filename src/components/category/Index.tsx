'use client';

import React, { useEffect, useState } from 'react';
import BoxService from './BoxServices';
import { getAllCategories } from '@/api/public';
import { ICategory } from '@/types/category';
import SkeletonLoading from './LoadingSkeleton';
import ErrorModal from '@/components/modals/errorModal';

const Services = () => {
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
    return <SkeletonLoading />;
  }

  return (
    <div className="flex flex-col">
      <section className="scroll-m-10 bg-white py-20">
        <div className="container mx-auto flex text-center justify-center">
          <div className="w-full lg:w-full xl:w-7/12 ml-0 ">
            <h2 className="font-extrabold tracking-normal text-[35px] md:text-[48px] leading-none mb-2 md:mb-8 text-black">
              Pilih Topik
            </h2>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 pb-8 gap-4 w-11/12 container mx-auto">
        {categories.map((item: ICategory) => {
          return (
            <BoxService
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

export default Services;
