'use client';

import { Footer, Header } from '@/components';
import {
  HeroBanner,
  Topic,
  Faq
} from "@/features/home"


export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-white dark:bg-black">
        <HeroBanner />
      </section>
      <section className="bg-gray-50 dark:bg-black">
        <Topic/>
      </section>
      <section className="bg-white dark:bg-black">
        <Faq/>
      </section>
    </>
  );
}
