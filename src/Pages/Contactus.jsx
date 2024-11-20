import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contactus = () => {
  return (
    <div className="bg-[#aefcf952] pb-6 text-blue-900 pt-20 px-6 md:px-12 lg:px-36">
      <h1 className="text-xl md:text-2xl font-bold mb-6">Get in Touch</h1>
      <p className="leading-relaxed mb-4">
        We're just a message away! Whether you have a question, need support, or want to share your feedback, we're here to listen and assist you. Get in touch through any of the following channels:
      </p>
      <div className="flex items-center mb-2">
        <FaPhoneAlt className="text-blue-400 mr-3" />
        <p className="font-semibold">+91 7428881720</p>
      </div>
      <div className="flex items-center mb-2">
        <FaEnvelope className="text-blue-400 mr-3" />
        <p className="font-semibold">infopaymine@gmail.com, info@click-pe.in</p>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-blue-400 mr-3" />
        <p className="leading-relaxed">
          AT G-13 F/F, Near Sitla Mata Mandir, Shyam Nagar, New Delhi, West Delhi-110018
        </p>
      </div>
    </div>
  );
};

export default Contactus;
