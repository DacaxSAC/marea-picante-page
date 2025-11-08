import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import logoImage from '../../assets/images/mhf5ra4p-qdanrq2.png';
import { NAV_ITEMS } from '@/constants';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm relative z-10">
      {/* Main Navigation */}
      <nav className="bg-white px-4 py-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={logoImage} 
                  alt="Marea Picante" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center space-x-12">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-[#061854] hover:text-[#48dfd6] transition-colors ${
                    location.pathname === item.path ? 'font-bold' : 'font-normal'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Contact Button */}
            <Button variant="contact">
              Contáctanos
            </Button>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between">
            {/* Logo - Izquierda */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img 
                  src={logoImage} 
                  alt="Marea Picante" 
                  className="h-12 w-auto"
                />
              </Link>
            </div>

            {/* Botón de menú hamburguesa - Derecha */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#061854] hover:text-[#48dfd6] transition-colors"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 md:hidden z-50 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#061854]/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Drawer Panel */}
          <div
            className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl rounded-l-3xl p-6 transform transition-transform duration-300 ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="space-y-2">
              {NAV_ITEMS.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-3 text-lg text-[#061854] rounded-xl transition-colors hover:bg-[#48dfd6]/10 ${
                    location.pathname === item.path ? 'font-bold bg-[#48dfd6]/10' : 'font-medium'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Botón Contáctanos dentro del overlay */}
              <div className="pt-4 flex justify-center">
                <Button
                  variant="contact-mobile"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contáctanos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;