import React from 'react';
import { Target, Eye, Heart, Lightbulb, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Solutions créatives et avant-gardistes' },
    { icon: Target, title: 'Impact', description: 'Résultats mesurables et durables' },
    { icon: Users, title: 'Performance', description: 'Excellence opérationnelle' },
    { icon: Heart, title: 'Inclusion', description: 'Développement pour tous' },
    { icon: Users, title: 'Collaboration', description: 'Partenariats stratégiques' },
    { icon: Shield, title: 'Résilience', description: 'Adaptabilité et durabilité' }
  ];

  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">À propos de nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fondé par une équipe d'experts multidisciplinaires passionnés par le développement économique, 
            l'inclusion financière et l'innovation, InnovaScope Group s'est imposé comme un partenaire de choix.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="text-blue-600 mr-3" size={28} />
                Notre Mission
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Accompagner de façon stratégique et opérationnelle les entreprises, institutions et partenaires 
                vers une transformation durable, inclusive et performante grâce à des solutions innovantes et adaptées.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="text-green-600 mr-3" size={28} />
                Notre Vision
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Construire un avenir économique plus inclusif, résilient et prospère en Afrique de l'Ouest, 
                où l'innovation et la participation de tous sont les moteurs du développement.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Implantation</h4>
              <p>Ouagadougou, Burkina Faso</p>
              <div className="mt-4 text-sm opacity-90">
                <p>RCCM: BF-OUA-01-2025-B13-03146</p>
                <p>IFU: 00262009R</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Bureau moderne en Afrique"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Années d'expertise</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Nos Valeurs Fondamentales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 ml-4">{value.title}</h4>
                </div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;