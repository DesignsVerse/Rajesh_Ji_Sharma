"use client";
import AstrologyGallery, { GalleryImage } from '../components/gallery/gallery';
import { motion } from 'framer-motion';

const zodiacSigns = [
  'Aries', 'Taurus', 'Gemini', 'Cancer',
  'Leo', 'Virgo', 'Libra', 'Scorpio',
  'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
];

const initialImages: GalleryImage[] = [
  {
    url: '/images/aries-chart.png',
    alt: 'Aries Horoscope Chart',
    caption: 'Aries Horoscope Analysis',
    width: 400,
    height: 300
  },
  {
    url: '/images/astrology-tools.jpg',
    alt: 'Astrology Tools',
    caption: 'Astrological Calculation Tools',
    width: 400,
    height: 300
  },
  // Add more images as needed
];

export default function GalleryPage() {
  return (
    <div className="relative">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl text-center mt-10 text-indigo-900 font-bold mb-8 font-serif">
          Astrology Gallery
        </h1>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-wrap gap-4 justify-center">
          {zodiacSigns.map((sign, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-indigo-800 hover:bg-indigo-700 transition-colors text-white"
            >
              {sign}
            </button>
          ))}
        </div>

        <AstrologyGallery images={initialImages} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <p className="text-sm text-yellow-400">
          &quot;The stars incline, they do not compel.&quot; - Ancient Astrological Wisdom
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-white hover:text-yellow-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            {/* Add more social icons */}
          </div>
        </div>
      </motion.div>
    </div>
  );
}