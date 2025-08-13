import { notFound } from 'next/navigation';
import { industryDetails } from '@/data/industryDetails';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { Metadata } from 'next';

interface Service {
  title: string;
  description: string;
  image: string;
}

interface Industry {
  title: string;
  description: string;
  image: string;
  services: Service[];
}

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industryDetails[slug as keyof typeof industryDetails];
  
  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: `${industry.title} - Starken Groups`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(industryDetails).map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industryDetails[slug as keyof typeof industryDetails] as Industry;

  if (!industry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
            <Home className="w-4 h-4" />
            <Link href="/industries" className="hover:text-[#EB7C19] transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span>{industry.title}</span>
          </div>
          
          <Link 
            href="/industries" 
            className="inline-flex items-center gap-2 text-[#EB7C19] hover:text-[#d66a15] transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Industries
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            {industry.title}
          </h1>
          
          <p className="text-lg text-gray-600">
            {industry.description}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industry.services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <div className="text-gray-600 leading-relaxed">
                  {service.description.split('\n').map((line, lineIndex) => {
                    if (line.trim() === '') return <br key={lineIndex} />;
                    if (line.startsWith('•')) {
                      return (
                        <div key={lineIndex} className="flex items-start gap-2 mb-1">
                          <span className="text-[#EB7C19] mt-1">•</span>
                          <span>{line.substring(1).trim()}</span>
                        </div>
                      );
                    }
                    if (line.endsWith(':')) {
                      return (
                        <h4 key={lineIndex} className="font-semibold text-gray-900 mt-4 mb-2">
                          {line}
                        </h4>
                      );
                    }
                    return <p key={lineIndex} className="mb-2">{line}</p>;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#0d1536] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Our {industry.title} Services?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Get in touch with our experts to discuss your requirements
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#EB7C19] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d66a15] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}