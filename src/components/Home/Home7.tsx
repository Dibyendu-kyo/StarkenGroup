import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import blogs from "@/data/blogs";

export default function BlogPage() {
  return (
    <section className="px-4 md:px-10 py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-2 text-gray-700 text-sm font-medium">
        <Home />
        <span>Our Blogs</span>
      </div>

      <h1 className="text-4xl font-semibold mb-10">Latest Articles</h1>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.slice(0, 3).map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} className="group">
            <div className="border border-gray-200 p-4 cursor-pointer transition rounded-lg overflow-hidden h-full flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-60 transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold min-h-[60px]">{blog.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {blog.date} • {blog.readTime}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* More Blogs Button */}
      <div className="mt-10 flex justify-end">
        <Link
          href="/blog"
          className="text-white font-medium flex items-center gap-1 hover:bg-white border bg-blue-950 px-4 py-3 rounded-full hover:text-black"
        >
          More Blogs →
        </Link>
      </div>
    </section>
  );
}
