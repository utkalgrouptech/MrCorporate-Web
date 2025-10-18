import React, { useState } from "react";
import { Phone, Email, LocationOn, AccessTime, Send } from '@mui/icons-material';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-gray-600 leading-relaxed">
                Have questions about our facility management services? Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
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
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
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
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Company & Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your facility management needs..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors duration-300 font-semibold shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Company Location */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Location</h2>
            {/* Map */}
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin" className='w-full h-full' referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Company Location Map"
              ></iframe>
            </div>
            {/* Address & Contact Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Company Address</h3>
                <p className="text-white "> Head Office:Arya Surya Enclave, Plot No- K5/475</p>
                <p className="text-white ">Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, </p>
                <p className="text-white "> Kalinga Vihar, Patrapada, Bhuabneswar,</p>
                <p className="text-white ">Dist- Khurda, Odisha, India-751019.</p>
              </div>
              <div className="h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MR Corporate Office Location"
                  className="rounded-b-2xl"
                ></iframe>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-orange-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold">Emergency Support</h3>
              </div>
              <p className="text-orange-100 mb-4">
                24/7 emergency facility support for urgent maintenance and technical issues
              </p>
              <a 
                href="tel:+918260500785" 
                className="inline-flex items-center space-x-2 bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: +91 8260500785</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;