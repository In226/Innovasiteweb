import React from 'react';
import { Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-2 rounded-lg mr-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">IS</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">InnovaScope Group</h3>
                <p className="text-sm text-gray-400">Cabinet de conseil stratégique</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Un partenaire stratégique pour une croissance inclusive au Burkina Faso et en Afrique de l'Ouest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-blue-800 p-2 rounded-lg hover:bg-blue-900 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-300 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="text-gray-300 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#equipe" className="text-gray-300 hover:text-white transition-colors">Rejoindre</a></li>
              <li><a href="#ressources" className="text-gray-300 hover:text-white transition-colors">Ressources</a></li>
              <li><a href="#evenements" className="text-gray-300 hover:text-white transition-colors">Actualités et événements</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">Ouagadougou, Burkina Faso</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">(+226) 69 99 67 99</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">secretariat@innovascope-group.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 InnovaScope Group. Tous droits réservés.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>

        {/* Legal Info */}
        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>RCCM: BF-OUA-01-2025-B13-03146 | IFU: 00262009R</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;