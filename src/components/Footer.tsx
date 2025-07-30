'use client';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0d1536] text-gray-300 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/main-logo/Screenshot_2025-07-12_210534-removebg-preview.png"
                alt="Starken Groups Logo"
                width={160}
                height={60}
                className="object-contain"
                quality={90}
              />
            </div>
            <p className="text-sm mb-4">
              Leading construction and engineering solutions provider with expertise across multiple industries.
            </p>
            <p className="text-xs mb-6">
              © {currentYear} Starken Groups. All rights reserved.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-15 w-15 mt-0.5 text-[white]" />
                <span>DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 04, Maharashtra &ndash; 411033, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#ffff]" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919422526219" className="hover:text-[#EB7C19] transition-colors">+91 94225 26219</a>
                  <a href="tel:+919822039637" className="hover:text-[#EB7C19] transition-colors">+91 98220 39637</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#ffff]" />
                <a href="mailto:enquiry@starkencw.com" className="hover:text-[#EB7C19] transition-colors">enquiry@starkencw.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/story" >Our Story</Link></li>
              <li><Link href="/milestones" >Milestones & Achievements</Link></li>
              <li><Link href="/certifications" >Certifications</Link></li>
              <li><Link href="/companies" >Companies</Link></li>
              <li><Link href="/industries" >Industries</Link></li>
              <li><Link href="/clients" >Clients</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/career" >Career</Link></li>
              <li><Link href="/blog">Blogs</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Network</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" >Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" >Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* Brand Story */}
     
      </div>
    </footer>
  );
};

export default Footer;