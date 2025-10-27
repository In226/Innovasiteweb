import React from 'react';
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Un partenaire stratégique pour une 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-green-400"> croissance inclusive</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Bienvenue chez InnovaScope Group, votre partenaire de confiance pour l'innovation, 
                la performance et l'impact durable au Burkina Faso et en Afrique de l'Ouest.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              >
                Découvrir nos services
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
              >
                Demander un rendez-vous
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Target className="text-yellow-400" size={32} />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-blue-200">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="text-green-400" size={32} />
                </div>
                <div className="text-2xl font-bold">100+</div>
                <div className="text-sm text-blue-200">Projets accompagnés</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="text-orange-400" size={32} />
                </div>
                <div className="text-2xl font-bold">33%</div>
                <div className="text-sm text-blue-200">Amélioration moyenne</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Équipe de consultation en Afrique"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm">Innovation & Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-sm">Impact & Inclusion</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm">Collaboration & Résilience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;