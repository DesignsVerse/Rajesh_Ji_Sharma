import { notFound } from "next/navigation";
import data from "@/app/data/posts.json";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface BlogPostParams {
  id: string;
}

export async function generateStaticParams() {
  return data.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function BlogPost({ params }: { params: BlogPostParams }) {
  const post = data.find((post) => post.id === params.id);

  if (!post) {
    return notFound();
  }

  return (
    <main className="mt-20 mb-20 w-full min-h-screen flex flex-col items-center pt-16 px-6 md:px-12 lg:px-24 bg-white text-black transition-all duration-300">
      
      {/* Blog Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-md p-10 border-4 border-[#800000]">
        
        {/* Blog Thumbnail with Background */}
        {post.thumbnail && (
          <div className="relative w-full flex justify-center mb-10">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-72 h-72 rounded-full bg-[#800000]"></div>
            </div>
            <Image
              src={post.thumbnail}
              width={900}
              height={500}
              alt={post.title}
              className="object-cover w-full h-auto relative z-10 rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Blog Header */}
        <div className="text-center">
          <h1 className="text-5xl text-black font-extrabold">
            {post.title}
          </h1>
          <p className="text-md text-black mt-3">
            Published on {post.publishDate} • {post.readTime} min read
          </p>
        </div>

        {/* Blog Content */}
        <div className="text-black">
          {post.sections.map((section, index) => (
            <div key={index} className="p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-black mb-4">
                {section.heading}
              </h2>
              <ReactMarkdown className="text-lg text-black leading-relaxed">
                {section.content}
              </ReactMarkdown>
            </div>
          ))}
        </div>

        {/* Author Section */}
        <div className="flex items-center mt-16 p-6 rounded-lg bg-gray-100 shadow-md border-t-4 border-[#800000]">
          <Image
            src={post.author.image}
            width={60}
            height={60}
            alt={post.author.name}
            className="rounded-full border-2 border-gray-300"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold text-black">
              {post.author.name}
            </p>
            <p className="text-sm text-black">
              {post.author.designation}
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
