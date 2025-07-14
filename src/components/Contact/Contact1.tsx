'use client';
import { Mail, MapPin, Home } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 flex flex-col md:flex-row items-start gap-10 mt-20">
      {/* Left Side - Form */}
      <div className="md:w-1/2 w-full">
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <Home/> Get in Touch
        </p>
        <h2 className="text-5xl font-light text-gray-800 mb-6 mt-3">Contact us</h2>
        <p className="text-gray-600 mb-10">
          We&rsquo;re here to help you with all your real estate needs. Whether you&rsquo;re looking to buy, sell, or invest, our team is ready to assist you.
        </p>

        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const firstName = formData.get('first') as string;
          const lastName = formData.get('lastName') as string;
          const email = formData.get('email') as string;
          const phone = formData.get('phone') as string;
          const message = formData.get('message') as string;
          
          const whatsappMessage = `Hello! I'd like to get in touch with Starken Groups.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message: ${message}

Please contact me regarding my inquiry.`;

          const whatsappUrl = `https://wa.me/919422526219?text=${encodeURIComponent(whatsappMessage)}`;
          window.open(whatsappUrl, '_blank');
        }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name='first'
            placeholder="First name*"
            className="border-b border-black p-2 outline-none"
            required
          />
          <input
            type="text"
            name='lastName'
            placeholder="Last name"
            className="border-b border-black p-2 outline-none"
          />
          <input
            type="email"
            name='email'
            placeholder="Email address*"
            className="border-b border-black p-2 outline-none"
            required
          />
          <input
            type="tel"
            name='phone'
            placeholder="Phone number"
            className="border-b border-black p-2 outline-none"
          />
          <textarea
            name='message'
            placeholder="Write your message here *"
            rows={4}
            className="border-b border-black p-2 outline-none md:col-span-2"
            required
          />
          <div className='flex justify-end'>
            <button
                type="submit"
                className="bg-blue-950 text-white py-2 px-6 rounded-3xl w-fit hover:bg-white hover:text-black hover:border hover:border-black"
            >
                Send via WhatsApp
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Map and Contact Info */}
      <div className="md:w-1/2 w-full flex flex-col gap-6 items-start">
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3783.2345632922365!2d73.8341099752918!3d18.518299382574806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDECCAN%20SQUARE%2C%20No.%20301%2C%204th%20Floor%2C%20Lane%20No.%201%2C%20Bhandarkar%20Rd.%2C%20Pune%20-%2004!5e0!3m2!1sen!2sus!4v1752332241835!5m2!1sen!2sus" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Starken Groups Office Location"
          ></iframe>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <MapPin className="text-blue-900 mt-1" />
            <div>
              <p className="font-semibold text-black">Office Address</p>
              <p className="text-gray-600">
                DECCAN SQUARE, No. 301, 4th Floor, Lane No. 1, Bhandarkar Rd., Pune - 04
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-blue-900 mt-1" />
            <div>
              <p className="font-semibold text-black">Write email</p>
              <p className="text-gray-600">enquiry@starkencw.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="text-blue-900 mt-1 text-lg">📞</div>
            <div>
              <p className="font-semibold text-black">Call us</p>
              <p className="text-gray-600">+91 94225 26219</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
