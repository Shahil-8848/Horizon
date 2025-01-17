import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import HorizonLogo from "../Photos/HorizonLogo.png";
const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#ff1100] text-white">
      {/* Curved top border using SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -translate-y-[99%] h-16">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ff1100"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* School Info Section */}
          <div className="space-y-6">
            <img
              src={HorizonLogo}
              width="100px"
              height="100px"
              alt="School Logo"
              className="bg-white p-2 rounded-lg"
            />
            <p className="text-lg font-medium max-w-xs">
              "For a Better Tomorrow"
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="hover:text-white/80 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  className="hover:text-white/80 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com"
                  className="hover:text-white/80 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Programs",
                "Admission",
                "News/Events",
                "Student Forms",
                "Payment Notice",
                "Academic Calendar",
                "School Policies",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white/80 transition-colors flex items-center space-x-2"
                  >
                    <span className="h-1 w-1 bg-white rounded-full"></span>
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 flex-shrink-0" />
                <span>Mechinagar, Dhulabari,Jhapa,Nepal</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-6 w-6 flex-shrink-0" />
                <a
                  href="mailto:info@samriddhischool.edu.np"
                  className="hover:text-white/80 transition-colors"
                >
                  easthorizon@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-6 w-6 flex-shrink-0" />
                <div>
                  <a
                    href="tel:01-4970590"
                    className="hover:text-white/80 transition-colors"
                  >
                    01-4970590
                  </a>
                  ,{" "}
                  <a
                    href="tel:01-4970591"
                    className="hover:text-white/80 transition-colors"
                  >
                    4970591
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* School Hours & Newsletter Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">School Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 4:00 PM</li>
                <li>Saturday: Closed</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Emergency Contact</h3>
              <p>24/7 Helpline: +977-980-12341547</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>
              © Copyright {new Date().getFullYear()} East Horizon English School
              All Rights Reserved
            </p>
            <div className="flex items-center space-x-2">
              <span>Powered By:</span>
              <a
                href="https://digitalnepal.com"
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                Shahil
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
