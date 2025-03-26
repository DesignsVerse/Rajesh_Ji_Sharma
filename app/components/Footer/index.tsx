"use client";
import Image from "next/image";
import Link from "next/link";
import Contactusform from "../Navbar/Contactus";
import { useState } from "react";
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Menu",
    link: ["Home", "Blog", "About", "Contact"],
  },
  {
    id: 2,
    section: "Category",
    link: ["Astrology", "Numerology", "Consultancy", "View All"]
  },
  {
    id: 3,
    section: "Pages",
    link: ["Testimonials", "Gallery", "Products"]
  },
];

const Footer = () => {
  const [isContactFormOpen, setContactFormOpen] = useState(false);

  const handleContactClick = () => {
    console.log('Contact button clicked!');
    setContactFormOpen(true);
  };

  return (
    <div className="bg-black mt-10 relative" id="first-section">
      <div className="mx-auto max-w-2xl pt-8 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-2 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          <div className='col-span-4'>
            <img src="/images/manage/logo.png" alt="logo" className="w-40 h-40" />
            <div className='flex gap-4'>
              <Link href="https://facebook.com"><Image src={'/images/footer/vec.svg'} alt="facebook" width={15} height={20} /></Link>
              <Link href="https://twitter.com"><Image src={'/images/footer/twitter.svg'} alt="twitter" width={20} height={20} /></Link>
              <Link href="https://instagram.com/astrorajeshpandit"><Image src={'/images/footer/instagram.svg'} alt="instagram" width={20} height={20} /></Link>
            </div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-extrabold mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                    <li key={index} className='mb-5'>
                    {link === 'Contact' ? (
                      <button onClick={handleContactClick} className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </button>
                    ) : link === 'Astrology' ? (
                      <Link href="/services/1" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Numerology' ? (
                      <Link href="/services/7" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Home' ? (
                      <Link href="#banner" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Blog' ? (
                      <Link href="/blog" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'About' ? (
                      <Link href="#aboutus-section" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Consultancy' ? (
                      <Link href="/consultancy" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'View All' ? (
                      <Link href="/services" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Testimonials' ? (
                      <Link href="#testimonial-section" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Gallery' ? (
                      <Link href="/gallery" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : link === 'Products' ? (
                      <Link href="/products" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    ) : (
                      <Link href="/not-found" className="text-white text-lg font-normal mb-6 space-links">
                        {link}
                      </Link>
                    )}
                  </li>
                  

                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        <div className="pt-5 pb-5 px-4 sm:px-6 lg:px-4 border-solid border-t border-footer">
          <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 xl:gap-x-8">
            <div>
              <h3 className='text-center md:text-start text-offwhite text-lg'>@2025 - All Rights Reserved by Astro Rajesh, Created by DesignsVerse</h3>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link href="/privacy">
                <h3 className="text-offwhite pr-6">Privacy policy</h3>
              </Link>
              <Link href="/terms">
                <h3 className="text-offwhite pl-6 border-solid border-l border-footer">Terms & conditions</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isContactFormOpen &&  <Contactusform isOpen={isContactFormOpen} closeModal={() => setContactFormOpen(false)} />
    }
    </div>
  );
};

export default Footer;
