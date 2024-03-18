'use client';

import DetailQuestion from '@/components/detail-question';

import { Result } from '@/interfaces/HighlightQuestion';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import BackNavigation from '@/components/back-home-navigation';
import HelpCenterBanner from '@/components/help-center/help-center-banner';
import HighlightQuestion from '@/components/highlight-question';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import getScrollAnimation from '@/utils/get-scroll-animation';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const DetailClient = (props: { postContent: string; postTitle: string }) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const params = useParams();
  const [detail, setDetail] = useState<Result>();
  const [question, setQuestion] = useState<Result[]>();

  const getDetailpost = async () => {
    try {
      const resp = await axios.get(
        `${process.env.BASE_URL}/global/blog/getPostDetail?postSlug=${params.id}`
      );
      console.log(resp.data.results);

      setDetail(resp.data.results);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  const getQuestion = async () => {
    try {
      const resp = await axios.get(
        `${process.env.BASE_URL}/global/blog/getBlogPost?categorySlug=${detail?.categorySlug}`
      );
      setQuestion(resp.data.results);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    getDetailpost();
  }, [params]);
  useEffect(() => {
    getQuestion();
  }, [detail]);
  return (
    <>
      <ScrollAnimationWrapper>
        <motion.div className="w-full flex justify-center" variants={scrollAnimation}>
          <div className="flex flex-col gap-8 min-w-[350px] xl:w-[1024px] w-[768px]">
            <BackNavigation color="black" />
            asa
            <DetailQuestion postContent={detail?.postContent} postTitle={detail?.postTitle} />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <HelpCenterBanner />
      <HighlightQuestion questions={question} title="Artikel Terkait" />
    </>
  );
};
export default DetailClient;
