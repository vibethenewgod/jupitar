'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactMethod: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      <section className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Form Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#000e40] mb-4">Get in touch</h1>
            <p className="text-gray-600 mb-8">Receive a response within 7 working days or less.</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7514] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7514] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7514] focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="contactMethod"
                  placeholder="Preferred Contact Method"
                  required
                  value={formData.contactMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7514] focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Enter your query, comment or suggestions:"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#cc7514] focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#cc7514] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#000f40] transition-colors text-lg"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* Address and Map Section */}
          <div>
            <h1 className="text-4xl font-bold text-[#000e40] mb-4">Our Address</h1>
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 leading-relaxed">
                House 1, Block 1, Pacesetter Bitek Estate Quarters, between DSTV office and Jericho Mall, opposite SAO Filling Station, Onireke, Ibadan, Oyo State, Nigeria.
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Contact:</span> {' '}
                <a href="tel:+2348033250313" className="text-[#cc7514] hover:underline">
                  +234 803 325 0313
                </a>
                ; {' '}
                <a href="tel:+18178914924" className="text-[#cc7514] hover:underline">
                  +1 (817) 891-4924
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email Address:</span> {' '}
                <a href="mailto:Ikepeters@yahoo.com" className="text-[#cc7514] hover:underline">
                  Ikepeters@yahoo.com
                </a>
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.0283396097355!2d3.8602317740665957!3d7.384281793878028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039d1b68a926065%3A0xe5179b2d0bb27363!2sSAO%20Filling%20Station%2C%20Jericho%20Mall%2C%20Ibadan%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1596530251581!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
