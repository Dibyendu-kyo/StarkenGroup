"use client";
import { useState } from "react";

const jobCards = [
  {
    id: 1,
    title: "Frontend Developer",
    department: "Engineering & Development",
    location: "Pune, India",
    type: "Full-Time",
    description: "Build scalable web applications using modern technologies."
  },
  {
    id: 2,
    title: "Backend Developer",
    department: "Engineering & Development",
    location: "Pune, India",
    type: "Full-Time",
    description: "Develop robust server-side applications and APIs."
  },
  {
    id: 3,
    title: "Marketing Manager",
    department: "Marketing & Communications",
    location: "Pune, India",
    type: "Full-Time",
    description: "Lead digital marketing strategies and brand development."
  },
  {
    id: 4,
    title: "Sales Executive",
    department: "Sales & Business Development",
    location: "Pune, India",
    type: "Full-Time",
    description: "Drive business growth through client acquisition and relationship management."
  },
  {
    id: 5,
    title: "Operations Manager",
    department: "Operations & Management",
    location: "Pune, India",
    type: "Full-Time",
    description: "Oversee day-to-day operations and ensure operational excellence."
  },
  {
    id: 6,
    title: "Finance Analyst",
    department: "Finance & Accounting",
    location: "Pune, India",
    type: "Full-Time",
    description: "Analyze financial data and provide strategic insights."
  }
];

export default function CareerPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<typeof jobCards[0] | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleApply = (job: typeof jobCards[0]) => {
    setSelectedJob(job);
    setFormData(prev => ({ ...prev, position: job.title }));
    setShowForm(true);
  };

  const handleBack = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Create WhatsApp message with application details
    const message = `Hello! I'm interested in applying for the ${formData.position} position at Starken Groups.

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Experience: ${formData.experience} years

${formData.message ? `Message: ${formData.message}` : ''}

Please contact me regarding this application.`;

    const whatsappUrl = `https://wa.me/919422526219?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');
    
    alert("Thank you for your application! We've opened WhatsApp for you to send your application details.");
  };

  if (showForm) {
    return (
      <section className="px-4 md:px-16 py-20 max-w-4xl mx-auto">
        <button
          onClick={handleBack}
          className="mb-8 text-blue-900 underline hover:text-blue-700 flex items-center gap-2"
        >
          ← Back to Job Listings
        </button>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for {selectedJob?.title}</h1>
          <p className="text-lg text-gray-600">
            {selectedJob?.department} • {selectedJob?.location} • {selectedJob?.type}
                  </p>
                </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Application Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter/Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your background, skills, and why you&apos;d like to join our team..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Resume/CV *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-950 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors font-semibold"
              >
                Submit Application
              </button>
            </div>
          </form>
          </div>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
        <p className="text-lg text-gray-600">
          We&apos;re always looking for talented individuals to join our diverse team across multiple industries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {jobCards.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-1">{job.department}</p>
              <p className="text-sm text-gray-500 mb-2">{job.location} • {job.type}</p>
              <p className="text-sm text-gray-600">{job.description}</p>
            </div>
              <button
              onClick={() => handleApply(job)}
              className="w-full bg-blue-950 text-white py-2 px-4 rounded-full hover:bg-blue-900 transition-colors font-medium"
              >
              Apply Now
              </button>
          </div>
        ))}
        </div>
    </section>
  );
}
