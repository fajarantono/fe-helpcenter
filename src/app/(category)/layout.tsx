'use client';

import HelpCenterBanner from '@/components/help-center/help-center-banner';
import HighlightQuestion from '@/components/highlight-question';
import Services from '@/components/category/Index';
import React, { useEffect, useState } from 'react';
import VectorBakcground from '/public/illustration/il-hero-services-vector.svg';
import Image from 'next/image';
import HeroServices from '@/components/hero-services';
import { usePathname } from 'next/navigation';
import axios from 'axios';
import { HighlightQuestions } from '@/interfaces/HighlightQuestion';

const page = (props: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const [question, setQuestion] = useState<HighlightQuestions>();

  const getQuestion = async () => {
    try {
      const resp = await axios.get(
        `${
          process.env.BASE_URL
        }/global/blog/getBlogPost?categorySlug=${pathname.replace('/', '')}`
      );
      console.log()
      setQuestion(resp.data);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    getQuestion();
  }, [pathname]);

  return (
    <div>
      <HeroServices name={pathname}>{props.children}</HeroServices>
      <HighlightQuestion questions={question?.results} />
      <HelpCenterBanner />
      <Services />
    </div>
  );
};

export default page;
