import React from "react";


const Formcontact: React.FC = () => {
  return (
  
      <section className="py-20 px-6 bg-gradient-to-br from-[#ee7623] to-[#282461]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Send a Message</h1>
            <p className="text-white mb-8">
              Feel free to get in touch by phone or through the contact form below. Your message will be sent directly to our staff who will answer as soon as they can.
            </p>
            <form className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white ">
                    Your Name (required)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white">
                    Email Address (required)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white ">
                    Phone Number (required)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Phone Number *"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white ">
                    The Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="The Subject"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white ">
                  Write your message
                </label>
                <textarea
                  rows={5}
                  placeholder="Type your message..."
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Submit
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
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Contact Details</h3>
                <p className="text-white ">+91-8260500785</p>
                <p className="text-white ">info@mrcorporate.com</p>
                <p className="text-white ">www.mrcorporate.in</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Formcontact;
