import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config';
import { cn } from '@/utils';
import { Background } from './background';
import { MobileNav } from './mobile-nav';
import { Nav } from './nav';

const logo = siteConfig.header.logo;
const name = siteConfig.name;
const nav = siteConfig.header.nav;

export const Header = () => {
  return (
    <header className="fixed w-full">
      <Nav items={nav} />
    </header>
  );
};

export default Header;
