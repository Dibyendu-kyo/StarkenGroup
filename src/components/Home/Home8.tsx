import Image from "next/image";
import testimonials from "@/data/testimonials";

export default function TestimonialSection() {
  return (
    <section className="px-4 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10">Clients Review</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {testimonials.map((item) => (
          <div key={item.id} className="border border-gray-200 p-6 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">{item.text}</p>
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
