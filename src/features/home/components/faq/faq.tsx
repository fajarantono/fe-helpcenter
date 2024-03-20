'use client';

import React, { useState } from 'react';
import Link from 'next/link';


export const Faq = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    console.log(index, 'index')
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-center text-gray-900 lg:mb-8 lg:text-3xl dark:text-white">
        Yang sering ditanyakan
      </h2>
      <div className="max-w-screen-md mx-auto">
          <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              {/* Accordion items */}
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h3 id={`accordion-heading-${index}`}>
                    <button type="button"
                      className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-900 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                      data-accordion-target={`#accordion-flush-body-${index}`}
                      onClick={() => toggleAccordion(index)}
                      aria-expanded={activeAccordion === index ? 'true' : 'false'}
                      aria-controls={`accordion-body-${index}`}>
                        <span>{item.question}</span>
                        <svg className={`w-6 h-6 shrink-0 ${activeAccordion === index ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                  </h3>
                  <div
                    id={`accordion-body-${index}`}
                    className={`accordion-collapse ${activeAccordion === index ? 'show' : 'hidden'}`}
                    aria-labelledby={`accordion-heading-${index}`}>
                    <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                      <p className="mb-2 text-gray-500 dark:text-gray-400 overflow-hidden whitespace-nowrap overflow-ellipsis" style={{maxHeight: '50px'}}>
                        {item.answer}
                      </p>
                      <Link href="#" className="text-green-500 font-bold">Selengkapnya</Link>
                    </div>
                  </div>
                </div>
              ))}

          </div>
      </div>
    </div>
  );
};

// Data FAQ
const faqItems = [
  {
    question: 'Can I use Landwind in open-source projects?',
    answer: 'Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more. Check out this guide to learn how to get started and start developing websites even faster with components on top of Tailwind CSS.',
  },
  {
    question: 'Is there a Figma file available?',
    answer: 'Landwind is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file. Check out the Figma design system based on the utility classes from Tailwind CSS and components from Landwind.',
  },
  {
    question: 'What are the differences between Landwind and Tailwind UI?',
    answer: 'The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies.',
  },
  {
    question: 'What about browser support?',
    answer: 'The main difference is that the core components from Landwind are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Landwind relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Landwind, Landwind Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies.',
  },
];