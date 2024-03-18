import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config';
import { cn } from '@/utils';
import { Background } from './background';
import { MobileNav } from './mobile-nav';
import { Nav } from './nav';
import { ThemeToggle } from './theme-toggle';

const logo = siteConfig.header.logo;
const name = siteConfig.name;
const nav = siteConfig.header.nav;

export const Header = () => {
  return (
    <header className={cn('sticky top-0 z-40 w-full')}>
      <div className="relative">
        <div className="container flex h-16 w-full mx-auto items-center justify-between sm:px-8">
          <Link
            href="/"
            className="mr-8 flex items-center space-x-2 transition-all hover:opacity-80"
          >
            {logo && (
              <Image
                src={logo}
                alt={name}
                loading="lazy"
                width={150}
                height={50}
                className="aspect-[auto 250 / 50] object-cover hidden xl:inline-block"
              />
            )}
            <span className="inline-block font-bold">{name}</span>
          </Link>
          <div className="absolute left-[50%] hidden translate-x-[-50%] sm:flex">
            <Nav items={nav} />
          </div>

          <div className="flex">
            <ThemeToggle />
            <div className="sm:hidden ">
              <MobileNav />
            </div>
          </div>

        </div>
        {/* background */}
        <Suspense fallback={null}>
          <Background />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
