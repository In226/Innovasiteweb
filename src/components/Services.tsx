import React from 'react';
import { 
  TrendingUp, 
  CreditCard, 
  Shield, 
  GraduationCap, 
  DollarSign, 
  Megaphone,
  Building,
  Banknote,
  Users,
  Briefcase,
  Rocket,
  Globe
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: 'Stratégie & Développement',
      description: 'Planification stratégique, études de faisabilité et transformation digitale',
      benefits: 'Amélioration de la prise de décision, réussite des projets, atteinte des objectifs',
      features: [
        'Planification stratégique et suivi-évaluation',
        'Études de faisabilité et gestion de projets',
        'Accompagnement à la transformation digitale'
      ]
    },
    {
      icon: CreditCard,
      title: 'Inclusion et Innovation financières',
      description: 'Transformation des services financiers et microfinance innovante',
      benefits: 'Accès élargi aux populations marginalisées, solutions adaptées',
      features: [
        'Transformation des services financiers',
        'Microfinance innovante et finance participative',
        'Digitalisation des services bancaires'
      ]
    },
    {
      icon: Shield,
      title: 'Gestion des risques & résilience',
      description: 'Audit, évaluation et gestion des risques financiers et climatiques',
      benefits: 'Sécurisation des activités, renforcement de la gouvernance',
      features: [
        'Audit et évaluation des risques',
        'Gestion des risques financiers et climatiques',
        'Renforcement de la gouvernance locale'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Éducation & Renforcement des capacités',
      description: 'Formations spécialisées et accompagnement entrepreneurial',
      benefits: 'Développement des compétences, création d\'entreprises',
      features: [
        'Formations en éducation financière',
        'Formations en gestion et gouvernance',
        'Incubation et accélération de startups'
      ]
    },
    {
      icon: DollarSign,
      title: 'Conseil & optimisation de l\'investissement',
      description: 'Appui aux investisseurs et mobilisation de ressources',
      benefits: 'Optimisation des investissements, sécurisation des projets',
      features: [
        'Appui aux investisseurs',
        'Optimisation et sécurisation',
        'Mobilisation de financements'
      ]
    },
    {
      icon: Megaphone,
      title: 'Communication institutionnelle & réseautage',
      description: 'Visibilité digitale et développement de réseaux d\'affaires',
      benefits: 'Amélioration de la visibilité, expansion des réseaux',
      features: [
        'Visibilité digitale',
        'Communication institutionnelle',
        'Développement de réseaux régionaux'
      ]
    }
  ];

  const sectors = [
    { icon: Building, title: 'Entreprises privées' },
    { icon: Banknote, title: 'Institutions financières & banques' },
    { icon: Users, title: 'Gouvernements & collectivités locales' },
    { icon: Globe, title: 'ONG et Partenaires techniques' },
    { icon: Rocket, title: 'Startups & entrepreneurs' },
    { icon: Briefcase, title: 'Organismes de développement' }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes et innovantes pour accompagner votre croissance et votre transformation
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <div className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800 font-medium">Bénéfices:</p>
                <p className="text-sm text-green-700">{service.benefits}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div className="bg-gradient-to-r from-blue-900 to-green-800 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold text-center mb-8">Secteurs Cibles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                <sector.icon size={24} className="text-yellow-400" />
                <span className="font-medium">{sector.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;