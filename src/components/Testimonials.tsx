import React from 'react';
import { Quote, Star, Building, Rocket, Award } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "InnovaScope Group nous a accompagné dans la digitalisation de notre institution de microfinance. Le résultat : une inclusion financière accrue de 33% et une gestion plus efficace.",
      author: "Directeur Général",
      company: "Institution financière",
      icon: Building,
      rating: 5
    },
    {
      quote: "Grâce à leurs conseils, notre start-up a levé ses premiers financements et accéléré son développement régional.",
      author: "Fondateur",
      company: "Start-up AgriTech",
      icon: Rocket,
      rating: 5
    },
    {
      quote: "Expertise, rigueur et sens de l'écoute : InnovaScope Group incarne l'innovation au service de la performance.",
      author: "Représentant",
      company: "Ministère du Développement économique",
      icon: Award,
      rating: 5
    }
  ];

  const caseStudies = [
    {
      title: "Digitalisation d'une institution de microfinance",
      description: "Transformation complète des processus avec amélioration de 33% de l'inclusion financière",
      impact: "500+ nouveaux clients touchés",
      sector: "Finance"
    },
    {
      title: "Accompagnement d'une start-up AgriTech",
      description: "Levée de fonds et expansion régionale réussie",
      impact: "2M€ de financement levé",
      sector: "Agriculture"
    },
    {
      title: "Stratégie de développement économique",
      description: "Élaboration d'un plan stratégique pour une collectivité locale",
      impact: "15 projets structurants identifiés",
      sector: "Public"
    }
  ];

  return (
    <section id="temoignages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Témoignages et Références</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre accompagnement et nos réalisations concrètes
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-4 left-6">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>
              
              <div className="pt-6">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                    <testimonial.icon className="text-white" size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Études de Cas</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.sector}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h4>
                <p className="text-gray-700 mb-4">{study.description}</p>
                
                <div className="bg-white p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-1">Impact mesuré:</p>
                  <p className="text-green-600 font-semibold">{study.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center"
            >
              Voir toutes nos réalisations
              <Quote className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;