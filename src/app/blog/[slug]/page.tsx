import { notFound } from 'next/navigation';
import blogs from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs.find(b => b.id === slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found',
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt || blog.content.substring(0, 160),
    keywords: blog.keywords?.join(', '),
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const blog = blogs.find(b => b.id === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#EB7C19] hover:text-[#d66a15] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#0d1536] text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {blog.keywords && (
          <div className="mb-8">
            <p className="text-sm text-gray-600 mb-3">Keywords:</p>
            <div className="flex flex-wrap gap-2">
              {blog.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: blog.content
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br>')
                .replace(/^/, '<p>')
                .replace(/$/, '</p>')
                .replace(/## (.*?)<br>/g, '<h2 class="text-2xl font-semibold mt-8 mb-4 text-gray-900">$1</h2>')
                .replace(/### (.*?)<br>/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-gray-900">$1</h3>')
                .replace(/- (.*?)<br>/g, '<li class="mb-1">$1</li>')
                .replace(/(<li.*?<\/li>)/g, '<ul class="list-disc pl-6 mb-4">$1</ul>')
            }}
          />
        </div>


      </div>
    </div>
  );
}