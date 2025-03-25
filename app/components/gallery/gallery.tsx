"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface GalleryImage {
  url: string;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
}

export interface AstrologyGalleryProps {
  images: GalleryImage[];
}

const AstrologyGallery: React.FC<AstrologyGalleryProps> = ({ images }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="py-16 bg-gradient-to-b from-indigo-900 to-indigo-700 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 320">
            <path 
              fillOpacity="0.1" 
              d="M0,160 C320,240 720,160 1080,160 C1280,160 1440,240 1440,240 L1440,320 L0,320 Z"
            ></path>
          </svg>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-8 font-serif tracking-wide">
          Astrological Insights & Celestial Wisdom
        </h2>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent bottom-0"></div>
          </div>

          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image, index) => (
              <motion.div 
                key={index} 
                className="relative rounded-xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center opacity-80">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M8 7V3m8 4V3m-9 8h10l-5 5-5-5z"
                    />
                  </svg>
                </div>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={image.width || 300}
                  height={image.height || 300}
                  className="w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 flex flex-col items-center justify-end p-6">
                  <p className="text-center text-xl text-white font-medium mb-2">{image.caption}</p>
                  <div className="flex gap-2">
                    <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span>
                    <span className="inline-block w-4 h-4 rounded-full bg-blue-400"></span>
                    <span className="inline-block w-4 h-4 rounded-full bg-purple-400"></span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AstrologyGallery;