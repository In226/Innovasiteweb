import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>(+226) 69 99 67 99</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>secretariat@innovascope-group.com</span>
            </div>
          </div>
          <div className="text-xs">
            Ouagadougou, Burkina Faso
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">IS</div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">InnovaScope Group</h1>
                <p className="text-xs text-gray-600">Cabinet de conseil stratégique</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">À propos</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#equipe" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Rejoindre</a>
              <a href="#ressources" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Ressources</a>
              <a href="#evenements" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Actualités et événements</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                Nous contacter
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#accueil" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Accueil</a>
                <a href="#apropos" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>À propos</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Services</a>
                <a href="#equipe" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Rejoindre</a>
                <a href="#ressources" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Ressources</a>
                <a href="#evenements" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Actualités et événements</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium" onClick={toggleMenu}>Contact</a>
                <a href="#contact" className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg text-center" onClick={toggleMenu}>
                  Nous contacter
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;