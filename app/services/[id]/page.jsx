import Image from "next/image";
import { notFound } from "next/navigation";
import data from "@/app/data/servicedata.json";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return { title: "Service Not Found" };

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function ServicePost({ params }) {
  const post = data.find((post) => post.id === params.id);
  if (!post) return notFound();

  return (
    <main className="mt-[140px] max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Main Content */}
        <section className="w-full lg:w-2/3 border p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-left">{post.title}</h1>
          <p className="text-gray-500 pl-1 text-left">{post.author}</p>

          {/* Image Section */}
          {post.image && (
            <div className="relative mt-6 w-full rounded-lg overflow-hidden">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={800} 
                height={400} 
                className="w-full h-[400px] object-cover rounded-lg"
                unoptimized 
              />
            </div>
          )}

          {/* Intro Paragraph */}
          {post.paragraph && (
            <p className="text-lg text-gray-700 mt-6">{post.paragraph}</p>
          )}

          {/* Sections */}
          {post.sections && post.sections.length > 0 && (
            <div className="mt-6 space-y-6">
              {post.sections.map((section, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                  <h2 className="text-2xl font-semibold">{section.heading}</h2>
                  <p className="mt-2 text-gray-700">{section.content}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/3 p-5 pt-24 rounded-lg shadow-md">
          {/* All Services */}
          <h2 className="text-xl font-semibold mb-4">All Services</h2>
          <ul className="space-y-2">
            {data.map((service) => (
              <li key={service.id} className="border p-2 rounded hover:bg-gray-200 cursor-pointer transition-colors">
                <Link href={`/services/${service.id}`} className="flex justify-between items-center">
                  {service.title}
                  <span className="text-blue-500">→</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="p-4 bg-gradient-to-r from-[#c0392b] to-[#e67e22] text-white rounded-lg mt-6">
            <h3 className="text-lg font-semibold text-black">कोई भी प्रश्न है?</h3>
            <p className="mt-3 text-sm text-white">
              बेझिझक हमसे संपर्क करें। हम जितनी जल्दी हो सकेगा आप को वापस संपर्क करेंगे।
              या अभी हमें फोन करें।
            </p>

            <div className="mt-4">
              <p className="text-sm text-white">कॉल करें: <span className="text-black">+(91) 9810487266</span></p>
              <p className="text-sm text-white">मेल करें: <span className="text-black">baglamukhisadhnapeeth@gmail.com</span></p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
