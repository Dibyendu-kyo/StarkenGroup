'use client';
import { useState } from 'react';
import { Plus, Minus, Home } from 'lucide-react';

const faqs = [
  {
    question: "What services does Starken Groups offer?",
    answer: "Starken Groups offers a comprehensive range of services including manufacturing, trading, construction, automobile, mechatronics, and non-governmental services. We have multiple companies under our umbrella covering various industries."
  },
  {
    question: "How many companies are part of Starken Groups?",
    answer: "We have multiple companies across different sectors including Raj Empires, AVS Alliance, SNS Technocrats, I Design Technologies, Sarvah Setu Pvt. Ltd, New Grindwel, Shrinidhi Innotech, Delicious Nutritional Nation, Starken Constroworld, and Arogyalabh Foundation."
  },
  {
    question: "What industries does Starken Groups operate in?",
    answer: "We operate in Construction, Automobile, Mechatronics, Manufacturing, Trading, and Non-Governmental sectors. Each sector has specialized companies with expertise in their respective fields."
  },
  {
    question: "How can I contact Starken Groups?",
    answer: "You can contact us at our office in DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 04, or email us at enquiry@starkencw.com. We're always ready to assist with your business needs."
  },
  {
    question: "What makes Starken Groups different from other companies?",
    answer: "Our diverse portfolio across multiple industries, established track record since 2011, and commitment to excellence in each sector sets us apart. We have vast knowledge of domestic and international experience in engineering and applications."
  },
  {
    question: "Do you provide international services?",
    answer: "Yes, we have extensive international experience in various fields including engineering and applications. Our expertise spans both domestic and international markets, allowing us to serve clients globally."
  },
  {
    question: "What are the key achievements of Starken Groups?",
    answer: "We have received multiple industry awards and recognition for excellence in customer service, innovation, and expertise across our various business sectors. Our companies have been successfully operating since 2011."
  },
  {
    question: "How can I partner with Starken Groups?",
    answer: "We welcome partnerships and collaborations. You can reach out to us through our contact page or email us directly. We're always looking for opportunities to expand our network and create mutually beneficial relationships."
  }
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="text-sm text-gray-500 mb-2">FAQ's</div>
      <h2 className="text-4xl font-semibold text-gray-900 mb-10">Frequently Asked Questions</h2>

      <div className="max-w-4xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4 mb-4"
          >
            <div
              className="flex items-start gap-3 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="pt-1">
                {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
              <h3 className="text-lg font-medium text-gray-700">
                {faq.question}
              </h3>
            </div>
            <div
              className={`transition-all overflow-hidden ease-in-out duration-300 text-gray-500 text-sm ${
                activeIndex === index ? 'max-h-40 mt-2' : 'max-h-0'
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
