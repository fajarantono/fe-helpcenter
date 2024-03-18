'use client';

import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import React, { useMemo } from 'react';
import BackNavigation from '../back-home-navigation';
import getScrollAnimation from '@/utils/get-scroll-animation';
import ScrollAnimationWrapper from '../scroll-animation-wrapper';
import { motion } from 'framer-motion';
import Image from 'next/image';
import VectorBakcground from '/public/illustration/il-hero-services-vector.svg';

const HeroServices = (props: { children: React.ReactNode; name: string }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const route = useRouter();

  const title = props.name.replace('/', '').split('-');

  const handleBackPage = () => {
    route.back();
  };
  return (
    <ScrollAnimationWrapper>
      <section className="bg-hero-service flex  max-sm:flex-col-reverse">
        <Image
          src={VectorBakcground}
          alt=""
          className="absolute top-2 xs: xl:-top-5 md:top-3 xxl:-top-5 left-[-11px max-sm:h-full  max-sm:hidden w-full object-fill -z-[9999]"
        />
        <div className=" absolute min-[640px]:hidden top-0 -z-[9999] bg-[#00b0dd] h-full w-full"></div>

        <div className="flex-[15] flex justify-center items-center ">
          <motion.div
            className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 gap-10 "
            variants={scrollAnimation}
          >
            <BackNavigation />
            <div className="">
              <h1 className="text-3xl lg:text-5xl text-white leading-normal font-semibold">
                {title[0].toUpperCase() +
                  ' ' +
                  title[1].charAt(0).toUpperCase() +
                  title[1].slice(1)}
              </h1>
              <p className=" mt-3 mb-10 text-white text-[15px] lg:text-base">
                Siap membantu semua yang Anda <br /> butuhkan di <strong>KLIK Indonesia</strong>
              </p>
              {/* <button className=" px-5 py-2.5 bg-white text-[#00B0DC] rounded-lg text-sm w-full lg:w-auto shadow-md shadow-[#00000040]">
                Customer Service
              </button> */}
            </div>
          </motion.div>
        </div>
        <motion.div variants={scrollAnimation} className="flex-[16] flex xl:pt-24">
          {props.children}
        </motion.div>
      </section>
    </ScrollAnimationWrapper>
  );
};

export default HeroServices;
