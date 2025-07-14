"use client";
import { Home } from "lucide-react";
import clients from "@/data/clients";
import Image from "next/image";

export default function ClientsPage() {
  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto mt-15">
      {/* Heading */}
      <div className="flex items-center gap-2 text-gray-700 text-sm font-medium mb-3">
        <Home />
        <span>Our Clients</span>
      </div>
      <h2 className="text-4xl font-semibold text-gray-900 mb-10">
        Trusted by Industry Leaders
      </h2>

      {/* Clients Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 flex flex-col items-center h-40 justify-between"
          >
            <div className="relative h-16 w-full mb-2">
              <Image
                src={client.image}
                alt={client.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm font-semibold text-center">{client.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
