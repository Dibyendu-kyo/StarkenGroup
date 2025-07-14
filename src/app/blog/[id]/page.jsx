'use client';
import { notFound } from 'next/navigation';
import blogs from '@/data/blogs';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetails({
  params
}) {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) return notFound();

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0 py-16 mt-20">
      <Link href="/blog" className="text-blue-600 text-sm mb-6 inline-block">
        ← Back to Blogs
      </Link>
      <p className="text-sm text-gray-500 mb-2">{blog.category}</p>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {blog.date} • {blog.readTime}
      </p>

      <div className="w-full h-80 relative rounded-lg overflow-hidden mb-8">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <article className="prose prose-lg max-w-none text-gray-800">
        {blog.content}
      </article>
    </section>
  );
}
