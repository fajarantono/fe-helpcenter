'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config';
import { Button } from '@/components/ui';

const data = siteConfig.heroBanner;
const imgHero = siteConfig.image;

export const HeroBanner = () => {
  return (
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            {Object.keys(data.title).map((sectionKey) => (
              <span className="flex" key={sectionKey}>
                {data.title[sectionKey].map((item, index) => (
                  <span key={index} className={item.highlighted ? 'text-primary' : ''}>
                    {item.text}
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {data.subtitle}
          </p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
          <Image src={imgHero} alt="heroIllustration" width="800" height="300" priority />
        </div>
      </div>
  );
};
