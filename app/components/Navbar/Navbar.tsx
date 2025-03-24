"use client";
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Contactusform from './Contactus';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '#banner', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'FAQ', href: '#faq-section', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Testimonial', href: '#testimonial-section', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleContactClick = () => {
    setContactFormOpen(true);
  };

  return (
    <>
      <Disclosure as="nav" className="navbar bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-100% p-3 md:p-4 lg:px-8">
              <div className="relative flex h-12 sm:h-20 items-center justify-between">
                
                {/* Logo Section */}
                <div className="flex items-center">
                  <Link href="#banner">
                    <Image src="/images/manage/logo.png" width={200} height={200} alt="Astro Rajesh" />
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex lg:items-center lg:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-[#A3C3E1] text-white'
                          : 'text-gray-700 hover:bg-[#90B9E9] hover:text-white',
                        'px-3 py-4 rounded-md text-lg font-normal transition-all duration-200'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Contact Button */}
                <div className="hidden lg:flex lg:items-center">
                  <button
                    onClick={handleContactClick}
                    className="text-xl font-semibold bg-lightblue py-4 px-6 lg:px-12 rounded-full hover:bg-darkblue hover:text-white"
                  >
                    Contact Us
                  </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                  <Disclosure.Button
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
              <Drawerdata />
            </Drawer>
          </>
        )}
      </Disclosure>

      {/* Contact Form Modal */}
      {isContactFormOpen && (
        <Contactusform isOpen={isContactFormOpen} closeModal={() => setContactFormOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
