import React, { useState } from 'react';
import { 
  Users, 
  Send, 
  CheckCircle, 
  User, 
  Mail, 
  Phone, 
  Building, 
  GraduationCap, 
  FileText, 
  MapPin,
  Award,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const JoinExperts = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    position: '',
    location: '',
    expertise: '',
    experience: '',
    education: '',
    motivation: '',
    availability: '',
    languages: '',
    references: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const expertiseAreas = [
    'Inclusion financière',
    'Microfinance et finance participative',
    'Transformation digitale',
    'Gestion des risques',
    'Audit et évaluation',
    'Gouvernance d\'entreprise',
    'Éducation financière',
    'Gestion de projet',
    'Suivi-évaluation',
    'Innovation technologique',
    'Développement économique',
    'Entrepreneuriat',
    'Communication institutionnelle',
    'Mobilisation de fonds',
    'Stratégie d\'entreprise',
    'Autre'
  ];

  const availabilityOptions = [
    'Temps plein',
    'Temps partiel',
    'Missions ponctuelles',
    'Consultations à distance',
    'Formations uniquement'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Expert registration:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        position: '',
        location: '',
        expertise: '',
        experience: '',
        education: '',
        motivation: '',
        availability: '',
        languages: '',
        references: ''
      });
    }, 5000);
  };

  const benefits = [
    {
      icon: Target,
      title: 'Missions d\'impact',
      description: 'Participez à des projets qui transforment l\'économie ouest-africaine'
    },
    {
      icon: Users,
      title: 'Réseau d\'experts',
      description: 'Rejoignez une communauté de professionnels expérimentés'
    },
    {
      icon: TrendingUp,
      title: 'Développement professionnel',
      description: 'Enrichissez votre expérience avec des défis stimulants'
    },
    {
      icon: Award,
      title: 'Reconnaissance',
      description: 'Valorisez votre expertise au service du développement'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="equipe" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Candidature envoyée avec succès !
            </h2>
            
            <p className="text-xl text-gray-600 mb-6">
              Merci pour votre intérêt à rejoindre notre réseau d'experts. 
              Nous examinerons votre candidature et vous recontacterons sous 48h.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-blue-800 mb-2">Prochaines étapes :</h3>
              <ul className="text-blue-700 text-sm space-y-1">
                <li>• Examen de votre candidature par notre équipe</li>
                <li>• Entretien téléphonique ou visioconférence</li>
                <li>• Intégration dans notre base d'experts</li>
                <li>• Première mission selon vos disponibilités</li>
              </ul>
            </div>
            
            <p className="text-gray-500 text-sm">
              📧 Un email de confirmation a été envoyé à votre adresse.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="equipe" className="py-20 bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-green-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Rejoindre l'équipe Experts InnovaScope
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Vous êtes un expert passionné par l'innovation et le développement ? 
              Rejoignez notre réseau de consultants et participez à des projets d'impact en Afrique de l'Ouest.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 -mt-8 relative z-10 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Pourquoi rejoindre InnovaScope Group ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-lg inline-block mb-4">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-green-600 p-3 rounded-lg">
                  <Users className="text-white" size={24} />
                </div>
                <div className="ml-4">
                  <h2 className="text-2xl font-bold text-gray-900">Formulaire de candidature</h2>
                  <p className="text-gray-600">Partagez votre expertise avec nous</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Informations personnelles */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <User className="mr-2" size={20} />
                    Informations personnelles
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre prénom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Mail className="mr-2" size={20} />
                    Coordonnées
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre.email@exemple.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+226 XX XX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline mr-1" size={16} />
                      Localisation *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ville, Pays"
                    />
                  </div>
                </div>

                {/* Profil professionnel */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Building className="mr-2" size={20} />
                    Profil professionnel
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organisation actuelle
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nom de votre organisation"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                        Poste actuel *
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Votre fonction"
                      />
                    </div>
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="mr-2" size={20} />
                    Domaine d'expertise
                  </h3>
                  
                  <div className="mb-4">
                    <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
                      Domaine principal *
                    </label>
                    <select
                      id="expertise"
                      name="expertise"
                      required
                      value={formData.expertise}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez votre domaine</option>
                      {expertiseAreas.map((area, index) => (
                        <option key={index} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                      Années d'expérience *
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Sélectionnez</option>
                      <option value="1-3 ans">1-3 ans</option>
                      <option value="4-7 ans">4-7 ans</option>
                      <option value="8-15 ans">8-15 ans</option>
                      <option value="Plus de 15 ans">Plus de 15 ans</option>
                    </select>
                  </div>
                </div>

                {/* Formation */}
                <div>
                  <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                    <GraduationCap className="inline mr-1" size={16} />
                    Formation et diplômes *
                  </label>
                  <textarea
                    id="education"
                    name="education"
                    required
                    rows={3}
                    value={formData.education}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Décrivez votre parcours académique et vos certifications..."
                  ></textarea>
                </div>

                {/* Disponibilité */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                    Disponibilité *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez votre disponibilité</option>
                    {availabilityOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Langues */}
                <div>
                  <label htmlFor="languages" className="block text-sm font-medium text-gray-700 mb-2">
                    Langues parlées *
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    required
                    value={formData.languages}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ex: Français (natif), Anglais (courant), Mooré (conversationnel)"
                  />
                </div>

                {/* Motivation */}
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="inline mr-1" size={16} />
                    Motivation et objectifs *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Expliquez pourquoi vous souhaitez rejoindre InnovaScope Group et vos objectifs..."
                  ></textarea>
                </div>

                {/* Références */}
                <div>
                  <label htmlFor="references" className="block text-sm font-medium text-gray-700 mb-2">
                    Références professionnelles (optionnel)
                  </label>
                  <textarea
                    id="references"
                    name="references"
                    rows={3}
                    value={formData.references}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Noms et contacts de personnes pouvant attester de votre expertise..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Envoyer ma candidature
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  En soumettant ce formulaire, vous acceptez d'être contacté par InnovaScope Group 
                  concernant les opportunités de collaboration.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Process */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Processus de sélection</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Candidature</h4>
                    <p className="text-sm text-gray-600">Soumission du formulaire en ligne</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Évaluation</h4>
                    <p className="text-sm text-gray-600">Examen de votre profil (48h)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Entretien</h4>
                    <p className="text-sm text-gray-600">Discussion avec notre équipe</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Intégration</h4>
                    <p className="text-sm text-gray-600">Ajout à notre réseau d'experts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Profil recherché</h3>
              
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Minimum 3 ans d'expérience
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Expertise reconnue dans votre domaine
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Connaissance du contexte africain
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Français obligatoire, anglais apprécié
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Disponibilité pour missions
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2 flex-shrink-0" size={16} />
                  Engagement pour l'impact social
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-blue-900 to-green-800 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Questions ?</h3>
              <p className="text-blue-100 mb-4">
                Notre équipe RH est disponible pour répondre à vos questions.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>rh@innovascope-group.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>(+226) 69 99 67 99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinExperts;