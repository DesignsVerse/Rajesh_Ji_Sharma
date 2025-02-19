'use client'
import { Blog } from "@/app/type/blog";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, image, title, publishDate } = blog;
  const defaultImage = "/images/default-blog.jpg"; // Default image if empty

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Link href={`/blog/${id}`} className="block">
        <Image
          src={image || defaultImage}  // Fix for empty src issue
          alt={title || "Blog Image"}  // SEO-friendly alt text
          width={600}
          height={400}
          className="w-full h-64 object-cover"
          loading="lazy"  // Removed priority to prevent conflict
        />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#800000] mb-2">
          <Link href={`/blog/${id}`} className="hover:text-[#D55F26]">
            {title}
          </Link>
        </h2>
        <div className="flex justify-between items-center">
          <Link href={`/blog/${id}`} className="text-[#D55F26] font-semibold inline-flex items-center">
            आगे पढ़ें <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
        <div className="border-t border-gray-300 my-4" />
        <p className="text-sm text-left text-gray-500">{publishDate}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
