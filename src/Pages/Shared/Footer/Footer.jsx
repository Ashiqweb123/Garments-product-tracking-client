import React from "react";
import Logo from "../../../Component/Logo/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Column 1: Main Logo */}
        <div className="flex justify-center md:justify-start">
          <Logo />
        </div>

        {/* Column 2: Contact Info */}
        <div className="text-center md:text-left space-y-2">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801869614405"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition-colors"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
              className="w-6 h-6"
            />
            <span>01869614405</span>
          </a>

          {/* Email */}
          <a
            href="mailto:rabiulazim430@gmail.com"
            className="block hover:text-secondary transition-colors"
          >
            📧 rabiulazim430@gmail.com
          </a>
        </div>

        {/* Column 3: LinkedIn */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg mb-2">Connect</h3>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-secondary transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.864-3.058-1.865 0-2.151 1.455-2.151 2.958v5.704h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.035 0 3.599 2 3.599 4.604v6.591z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-sm text-primary-content/70">
        Copyright © {new Date().getFullYear()} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
