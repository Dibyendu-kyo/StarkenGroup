"use client";
import Link from "next/link";
import blogs from "@/data/blogs";
import { Home, Calendar, Clock } from "lucide-react";
import Image from "next/image";

export default function Blog1() {
  return (
    <section className="px-4 md:px-10 py-16 max-w-7xl mx-auto mt-25">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6 text-gray-700 text-sm font-medium">
        <Home />
        <span>Our Blogs</span>
      </div>
      <h1 className="text-4xl font-semibold mb-10">Latest Articles</h1>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="group cursor-pointer bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className="bg-[#0d1536] text-white px-3 py-1 rounded-full text-xs font-medium">
                  {blog.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#EB7C19] transition-colors">
                {blog.title}
              </h3>
              
              {blog.excerpt && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>
              )}
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <span className="text-[#EB7C19] font-medium hover:underline">
                  Read More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
