"use client";

import serviceData from "@/app/components/Services/ServicesData";
import SingleService from "@/app/components/Services/SingleServices";
import Link from "next/link";

const Service = () => {
  return (
    <section className="pb-[120px] p-[20px] w-full">
      <div className="max-w-screen-lx mx-auto">
        {/* Heading and Description */}
        <div className="text-center mt-10 mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Unlock the Wisdom of Astrology and Numerology</h2>
          <p className="text-lg text-gray-600">
            Discover how the ancient arts of astrology and numerology can guide you in your journey. 
            Our expert services provide personalized insights that help you understand your destiny, 
            uncover hidden potentials, and make informed decisions. Explore our offerings to find the 
            guidance you need to navigate life &apos; challenges with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-0">
          {serviceData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl text-center transform transition-transform hover:scale-105 bg-gradient-to-r from-[#E0F3FF] to-[#B2E0FF] hover:from-[#A3C3E1] hover:to-[#90B9E9] p-6 shadow-md hover:shadow-lg"            >
              <Link href={`/services/${service.id}`}>
                <SingleService services={service} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
