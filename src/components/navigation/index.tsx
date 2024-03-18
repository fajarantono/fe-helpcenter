'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/image/logo.png';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';

const navigationMenu = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'FAQ',
  },
  {
    href: '#',
    label: 'Knwoladge Base',
  },
  {
    href: '#',
    label: 'Contact Us',
  },
];

export default function Navigation() {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const [navOpen, setNavOpen] = useState(false);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <header
        className={
          'sticky top-0 py-3 w-full z-30 bg-white transition-all' +
          (scrollActive ? ' shadow-md' : '')
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div>
              <Link href="/" className="flex justify-center items-center">
                <Image
                  src={logo}
                  alt="logo"
                  width={0}
                  height={0}
                  priority={true}
                  className="object-contain w-[150px] h-auto"
                />
              </Link>
            </div>
            {/* Navigation Menu */}
            {/* <div className="hidden lg:block">
              <ul className="flex space-x-7">
                {navigationMenu?.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <Link href={item?.href}>{item?.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div> */}
            {/* CTA */}
            <div className="flex gap-1">
              {/* <Link
                href="#"
                className="px-4 py-1 bg-white text-[#00B0DC] border border-[#00B0DC] rounded-lg hidden lg:inline-block"
              >
                Masuk
              </Link> */}
              <Link
                href="https://eklik.id/"
                target="_blank"
                className="px-4 py-1 bg-[#00B0DC] text-white rounded-lg hidden lg:inline-block"
              >
                Kembali Ke Klik Indonesia
              </Link>
              {/* <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3BottomRight className="text-3xl"></HiBars3BottomRight>
              </button> */}
            </div>
          </div>
        </nav>
      </header>

      {/* For Mobile/Tablet Device Nav Menu  */}
      <div
        className={
          navOpen ? 'py-0 block fixed w-screen z-[9999]' : 'py-0 hidden fixed w-screen z-[9999]'
        }
      >
        <div className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button className="flex items-center space-x-3" onClick={mobileMenuHandler}>
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu?.map((item: any, idx: number) => {
                return (
                  <li key={idx}>
                    <Link
                      href={item?.href}
                      className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-orange-600"
                    >
                      <span>{item?.label}</span>
                      <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                        <BiChevronRight className="text-xl" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
