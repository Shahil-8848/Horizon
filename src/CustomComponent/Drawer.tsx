import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  subMenu: string[];
}

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  const getSubMenuLink = (itemHref: string, subItem: string): string => {
    return `${itemHref}/${subItem.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Menu</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.href}
                className="text-lg font-medium text-gray-800 hover:text-primary"
                onClick={onClose}
              >
                {item.name}
              </Link>
              <ul className="ml-4 mt-2 space-y-2">
                {item.subMenu.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      to={getSubMenuLink(item.href, subItem)}
                      className="text-sm text-gray-600 hover:text-primary"
                      onClick={onClose}
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
