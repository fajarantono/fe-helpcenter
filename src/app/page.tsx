'use client';

// import HeroBanner from '@/components/hero';
// import Services from '@/components/category';
import { AnimatedGradient } from "@/components"
import {
  HeroBanner,
} from "@/features/home"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <AnimatedGradient />
      <HeroBanner />
      {/* <Services /> */}
    </main>
  );
}
