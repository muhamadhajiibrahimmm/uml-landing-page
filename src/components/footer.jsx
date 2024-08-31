import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-cyan-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1: Logo & About */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold mb-4">TechGuard</h2>
            <p className="text-center md:text-left">
              TechGuard is your go-to platform for the latest technology news, reviews, and insights. Stay updated with happenings in the tech world.
            </p>
          </div>
          {/* Section 2: Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#partners" className="hover:text-gray-400">Partners</a></li>
            </ul>
          </div>
          {/* Section 3: Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>Email: info@techguard.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 123 Tech Street, Silicon Valley</li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 TechGuard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

export { Footer };
