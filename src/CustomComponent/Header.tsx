import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Phone, Menu } from "lucide-react";
import HorizonLogo from "../Photos/HorizonLogo.png";
import { NewsSlider } from "./NewsSlider";
import { Drawer } from "./Drawer";

// Add keyframe animations
const iconAnimationStyles = `
  @keyframes shakeIcon {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg); }
    50% { transform: rotate(-15deg); }
    75% { transform: rotate(15deg); }
  }

  .shake-animation {
    animation: shakeIcon 0.5s ease-in-out;
  }
`;

interface NavItem {
  name: string;
  href: string;
  subMenu: string[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    // Add the animation styles to the document
    const styleSheet = document.createElement("style");
    styleSheet.textContent = iconAnimationStyles;
    document.head.appendChild(styleSheet);

    // Function to trigger icon animations
    const animateIcons = () => {
      const locationIcon = document.querySelector(".location-icon");
      const phoneIcon = document.querySelector(".phone-icon");

      if (locationIcon && phoneIcon) {
        locationIcon.classList.remove("shake-animation");
        phoneIcon.classList.remove("shake-animation");

        // Trigger reflow
        void locationIcon.offsetWidth;
        void phoneIcon.offsetWidth;

        locationIcon.classList.add("shake-animation");
        setTimeout(() => {
          phoneIcon.classList.add("shake-animation");
        }, 1000);
      }
    };

    // Initial animation
    animateIcons();

    // Set up interval for animations
    const interval = setInterval(animateIcons, 5000);

    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      document.head.removeChild(styleSheet);
    };
  }, []);

  const navItems: NavItem[] = [
    {
      name: "Programs",
      href: "/programs",
      subMenu: [
        "XIXII Management Stream",
        "Pre-School",
        "Primary School I - V",
        "Secondary School VI - X",
      ],
    },
    {
      name: "Admission",
      href: "/admission",
      subMenu: ["Application Process", "Requirements", "Fee Structure"],
    },
    {
      name: "News/Events",
      href: "/news-events",
      subMenu: ["Latest News", "Upcoming Events", "School Calendar"],
    },
    {
      name: "About",
      href: "/about",
      subMenu: ["Our History", "Mission & Vision", "Faculty"],
    },
    {
      name: "Contact",
      href: "/contact",
      subMenu: ["Location", "Get in Touch", "Career"],
    },
  ];

  const getSubMenuLink = (itemHref: string, subItem: string): string => {
    return `${itemHref}/${subItem.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <header className="w-full fixed top-0 z-50 transition-all duration-300">
      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isScrolled ? "h-16" : "h-auto"
        }`}
      >
        {/* Top Section with Logo and Contact Info */}
        <div
          className={`w-full bg-white transition-all duration-300 relative ${
            isScrolled ? "hidden" : "block"
          }`}
        >
          <div className="py-4 px-4">
            <div className="relative flex justify-center">
              {/* News Slider - hidden on mobile */}
              <div className="hidden md:block">
                {!isScrolled && <NewsSlider />}
              </div>

              {/* Logo centered */}
              <div className="flex justify-center">
                <img
                  src={HorizonLogo || "/placeholder.svg"}
                  alt="Horizon Academy Logo"
                  width={100}
                  height={50}
                  className="transform-gpu"
                />
              </div>

              {/* Contact Info - Right aligned, hidden on mobile */}
              <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center space-x-8">
                <div className="flex items-center group cursor-pointer">
                  <MapPin
                    size={20}
                    className="location-icon text-red-600 mr-2 transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-base font-semibold tracking-wide uppercase text-gray-500">
                    Mechinagar, Dhulabari
                  </span>
                </div>
                <div className="flex items-center group cursor-pointer">
                  <Phone
                    size={20}
                    className="phone-icon text-green-600 mr-2 transition-transform duration-200 group-hover:scale-110"
                  />
                  <span className="text-base font-semibold tracking-wide uppercase text-gray-500">
                    +977 123-456-7890
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`w-full h-50 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md pt-5 pb-5" : "bg-gray-900/90"
          }`}
        >
          <div className="relative container mx-auto px-4">
            <div className="flex justify-between items-center md:justify-center">
              {isScrolled && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Link to="/" className="">
                    <img
                      src={HorizonLogo || "/placeholder.svg"}
                      alt="Horizon Academy Logo"
                      width={65}
                      height={65}
                    />
                  </Link>
                </div>
              )}
              {/* Mobile menu button */}
              <button
                className="md:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setIsDrawerOpen(true)}
              >
                <Menu size={24} />
              </button>
              {/* Desktop menu */}
              <ul className="hidden md:flex justify-center space-x-8 py-4">
                {navItems.map((item) => (
                  <li
                    key={item.name}
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative group"
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-1 text-lg font-medium ${
                        isScrolled ? "text-gray-800" : "text-white"
                      } hover:text-primary transition-colors duration-200`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </Link>
                    <ul
                      className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-gray-900/90 rounded-md shadow-lg transition-all duration-200 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.subMenu.map((subItem) => (
                        <li key={subItem}>
                          <Link
                            to={getSubMenuLink(item.href, subItem)}
                            className="block px-6 py-3 text-white hover:bg-gray-800 transition-colors duration-200"
                          >
                            {subItem}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* Mobile Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navItems={navItems}
      />
    </header>
  );
};

export default Header;
