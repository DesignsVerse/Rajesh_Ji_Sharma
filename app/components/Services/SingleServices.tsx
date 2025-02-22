import { Services } from "@/types/services";
import Image from "next/image";
import Link from "next/link";

const SingleServices = ({ services }: { services: Services }) => {
  const { id, title, image, paragraph } = services;

  return (
    <div className="group relative overflow-hidden rounded-md bg-white shadow-one duration-300 hover:shadow-two mb-8">
      
      {/* Image Link */}
      <Link href={`/services/${id}`} className="relative block w-full">
        <div className="relative w-full h-[200px] md:h-[250px] lg:h-[280px] overflow-hidden">
          <Image
            src={image}
            alt="image"
            width={500}
            height={300}
            priority
            className="rounded-md object-cover"
          />
        </div>
      </Link>

      <div className="p-4">
        {/* Title Link */}
        <h3 className="mb-4 block text-xl font-bold text-black hover:text sm:text-2xl">
          <Link href={`/services/${id}`}>{title}</Link>
        </h3>

        {/* Paragraph */}
        <p className="no-underline mb-6 border-b text-justify border-body-color border-opacity-10 pb-6 font-medium text-body-color-black">
          <Link href={`/services/${id}`} className="">{paragraph}</Link>
        </p>

        {/* Buttons - View More & Book Now */}
        <div className="flex justify-between items-center mt-4">
          <Link href={`/services/${id}`} className="text-[#d55f26] font-semibold hover:underline">
          और देखें
          </Link>
          <a
            href="https://api.whatsapp.com/send/?phone=919752165718&text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%2C+%E0%A4%A8%E0%A4%82%E0%A4%A6%E0%A4%95%E0%A4%BF%E0%A4%B6%E0%A5%8B%E0%A4%B0+%E0%A4%9C%E0%A5%80%2C+%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87+%E0%A4%AE%E0%A4%BE%E0%A4%81+%E0%A4%AC%E0%A4%97%E0%A4%B2%E0%A4%BE%E0%A4%AE%E0%A5%81%E0%A4%96%E0%A5%80+%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0+%E0%A4%AE%E0%A5%87%E0%A4%82+%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE+%E0%A4%95%E0%A4%B0%E0%A4%B5%E0%A4%BE%E0%A4%A8%E0%A5%80+%E0%A4%B9%E0%A5%88%E0%A5%A4&
" // Yaha apna WhatsApp number dal dena
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d55f26] text-white px-4 py-2 rounded-lg shadow-md font-semibold flex items-center gap-2 hover:scale-105 hover:shadow-lg transition duration-300"
          >
            {/* 📲  */}अभी बुक करें
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleServices;
