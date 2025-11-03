import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import logoImage from '../../assets/images/mhf5ra4p-qdanrq2.png';

const Header: React.FC = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Carta', path: '/carta' },
    { name: 'Galería', path: '/galeria' },
    { name: 'Sobre nosotros', path: '/sobre-nosotros' }
  ];

  return (
    <header className="bg-white shadow-sm relative z-10">
      {/* Main Navigation */}
      <nav className="bg-white px-4 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          <div className="hidden md:flex items-center space-x-12">
            {menuItems.map((item, index) => (
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-[#061854]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;