"use client";
import Link from "next/link";
import blogs from "@/data/blogs";
import { Home } from "lucide-react";
import Image from "next/image";

export default function Blog1() {
  // Show only the first 3 blogs
  const displayedBlogs = blogs.slice(0, 3);

  return (
    <section className="px-4 md:px-10 py-16 max-w-7xl mx-auto mt-25">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-6 text-gray-700 text-sm font-medium">
        <Home />
        <span>Our Blogs</span>
      </div>
      <h1 className="text-4xl font-semibold mb-10">Latest Articles</h1>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch">
        {displayedBlogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`} className="group h-full">
            <div className="border border-gray-200 p-4 cursor-pointer transition overflow-hidden h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
                <div className="overflow-hidden relative w-full h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold line-clamp-2 h-14">
                  {blog.title}
                </h3>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {blog.date} • {blog.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
