"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs: React.FC = () => {
  const whatsappImages = [
    "/images/whatsimage/whatsimage 1.jpg",
    "/images/whatsimage/whatsimage 2.jpg",
    "/images/whatsimage/whatsimage 3.jpg",
    "/images/whatsimage/whatsimage 4.jpg",
    "/images/whatsimage/whatsimage 5.jpg",
    "/images/whatsimage/whatsimage 6.jpg",
    "/images/whatsimage/whatsimage 7.jpg",
    "/images/whatsimage/whatsimage 8.jpg",
    "/images/whatsimage/whatsimage 9.jpg",
    

];
    
  return (
    <section className="max-w-6xl mx-auto p-6 text-center">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 p-10 rounded-lg text-white shadow-lg">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Welcome to <span className="font-semibold">DesignsVerse</span>, India&apos;s leading agency in web development, digital marketing, UI/UX design, ERP solutions, and branding.
          Our team is passionate about turning ideas into reality with innovation and expertise.
        </p>
      </div>

      {/* Profile & Description Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/3 flex justify-center">
          <Image 
            src="/images/dedicated/comma.png"  
            alt="Our Team" 
            width={300} 
            height={300} 
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>
        <div className="w-full md:w-2/3 mt-6 md:mt-0 md:text-left text-center">
          <h2 className="text-3xl font-bold text-red-900" >Rajesh Sharma</h2>
          <p className="mt-3 text-lg text-gray-700 leading-relaxed">
            Since childhood, Pandit Rajesh was drawn to astrology, learning the sacred scriptures under the mentorship of renowned gurus in Ujjain. His expertise extends beyond astrology, encompassing spiritual healing, mantra chanting, and performing precise poojas for different life problems.
            </p>
        </div>
      </div>

      {/* Experience & Achievements Section */}
      <div className="mt-12 bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-blue-700">Our Experience & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">5+ Years of Expertise</h3>
            <p className="mt-2 text-gray-600">
            Providing profound insights and guidance in Vedic astrology, numerology, and spiritual consultations.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">200+ Satisfied Clients</h3>
            <p className="mt-2 text-gray-600">
            Guiding individuals with accurate astrology and numerology insights for a brighter future.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold text-gray-900">Decoding Destiny for Years</h3>
            <p className="mt-2 text-gray-600">
            Helping people unlock their potential through time-tested Vedic astrology and numerology.
            </p>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-red-900" >Our Vision</h2>
        <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
                    At Rajesh Sharma, we are dedicated to bringing clarity, success, and peace into people`&apos;s lives through the profound wisdom of astrology, numerology, and Vedic sciences. 
                    Our mission is to decode the cosmic energies and provide insightful guidance to individuals, helping them navigate life`&apos;s uncertainties with confidence and clarity. 
                    By blending time-honored traditions with a modern approach, we strive to empower individuals with accurate predictions, powerful remedies, and spiritual enlightenment. 
                    Our commitment is to illuminate paths, resolve challenges, and lead people toward a fulfilling and harmonious life, backed by divine knowledge and celestial wisdom.
                </p>
      </div>

      {/* Testimonials Section */}


      {/* WhatsApp Chat Section */}
      <section className="max-w-6xl mx-auto p-6 text-center">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 p-10 rounded-lg text-white shadow-lg">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="mt-4 text-lg">
                    Welcome to <span className="font-semibold">DesignsVerse</span>, India&apos;s leading agency in web development, digital marketing, UI/UX design, ERP solutions, and branding.
                    Our team is passionate about turning ideas into reality with innovation and expertise.
                </p>
            </div>

            {/* Testimonials Section */}
            <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-900">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {[{
                        text: "Pandit Rajesh’s guidance completely changed my life. His predictions were so accurate and helpful!",
                        author: "Anjali Verma"
                    }, {
                        text: "The remedies he suggested worked wonders. I feel more positive and in control of my future.",
                        author: "Rohit Mishra"
                    }, {
                        text: "I was facing career obstacles, but his astrological guidance helped me achieve my goals!",
                        author: "Meera Sharma"
                    }].map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white shadow-md rounded-lg border border-gray-300">
                            <p className="text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                            <h3 className="mt-3 font-bold text-gray-900">- {testimonial.author}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <section className="max-w-6xl mx-auto p-6 text-center">
            <h2 className="text-3xl font-semibold text-gray-900">WhatsApp Chat Gallery</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {whatsappImages.map((imgSrc, index) => (
                    <div key={index} className="flex flex-col items-center border border-gray-300 p-4 rounded-lg shadow-md bg-white">
                        <Image 
                            src={imgSrc} 
                            alt={`WhatsApp Chat ${index + 1}`} 
                            width={300} 
                            height={400} 
                            className="rounded-lg shadow-md"
                        />
                    </div>
                ))}
            </div>
        </section>
        </section>
    </section>
  );
};

export default AboutUs;
