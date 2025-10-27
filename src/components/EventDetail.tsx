import React, { useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, DollarSign, User, Mail, Phone, Building, CheckCircle, Globe } from 'lucide-react';

interface EventDetailProps {
  event: {
    id: number;
    title: string;
    type: string;
    location: string;
    date: string;
    time: string;
    summary: string;
    capacity: number;
    registered: number;
    price: string;
    status: string;
    image?: string;
    description?: string;
    objectives?: string[];
    program?: { time: string; activity: string }[];
    speakers?: { name: string; role: string; bio: string }[];
    targetAudience?: string;
  };
  onBack: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    console.log('Registration:', { ...formData, eventId: event.id });
    setIsRegistered(true);
    setIsSubmitting(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      'Formation': 'bg-blue-100 text-blue-800',
      'Webinaire': 'bg-green-100 text-green-800',
      'Atelier': 'bg-purple-100 text-purple-800',
      'Conférence': 'bg-orange-100 text-orange-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const availableSpots = event.capacity - event.registered;
  const isLocationOnline = event.location === 'En ligne';

  // Sample data for demonstration
  const eventDetails = {
    description: "Cette formation complète vous permettra de maîtriser les outils et méthodologies essentiels pour évaluer et gérer efficacement les risques climatiques dans vos projets d'entreprise. Vous apprendrez à identifier les vulnérabilités, développer des stratégies d'adaptation et intégrer la résilience climatique dans votre planification stratégique.",
    objectives: [
      "Comprendre les enjeux des risques climatiques pour les entreprises",
      "Maîtriser les outils d'évaluation des risques climatiques",
      "Développer des stratégies d'adaptation et de résilience",
      "Intégrer la gestion des risques climatiques dans la gouvernance d'entreprise"
    ],
    program: [
      { time: "09:00 - 09:30", activity: "Accueil et présentation des participants" },
      { time: "09:30 - 11:00", activity: "Module 1 : Comprendre les risques climatiques" },
      { time: "11:00 - 11:15", activity: "Pause café" },
      { time: "11:15 - 12:30", activity: "Module 2 : Outils d'évaluation des risques" },
      { time: "12:30 - 13:30", activity: "Pause déjeuner" },
      { time: "13:30 - 15:00", activity: "Module 3 : Stratégies d'adaptation" },
      { time: "15:00 - 15:15", activity: "Pause" },
      { time: "15:15 - 16:30", activity: "Module 4 : Intégration dans la gouvernance" },
      { time: "16:30 - 17:00", activity: "Synthèse et évaluation" }
    ],
    speakers: [
      {
        name: "DAO Souleymane",
        role: "Coordinateur InnovaScope Group",
        bio: "Expert en inclusion financière avec plus de 15 ans d'expérience dans l'accompagnement d'institutions financières et de projets de développement."
      },
      {
        name: "Expert Climat",
        role: "Consultant en adaptation climatique",
        bio: "Spécialiste des questions climatiques en Afrique de l'Ouest, avec une expertise reconnue en évaluation des risques et stratégies d'adaptation."
      }
    ],
    targetAudience: "Cette formation s'adresse aux dirigeants d'entreprises, responsables de projets, consultants, et professionnels du développement souhaitant intégrer la gestion des risques climatiques dans leurs activités."
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Retour aux événements</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-blue-600 to-green-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📊</div>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
                <p className="text-lg text-gray-600">{event.summary}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{eventDetails.description}</p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">À qui s'adresse cet événement ?</h3>
              <p className="text-gray-700 leading-relaxed">{eventDetails.targetAudience}</p>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Objectifs de la formation</h2>
              <ul className="space-y-3">
                {eventDetails.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Programme détaillé</h2>
              <div className="space-y-4">
                {eventDetails.program.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium min-w-fit">
                      {item.time}
                    </div>
                    <div className="text-gray-700">{item.activity}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intervenants</h2>
              <div className="space-y-6">
                {eventDetails.speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                      {speaker.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{speaker.role}</p>
                      <p className="text-gray-600 text-sm">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Event Info */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Informations pratiques</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Date</p>
                    <p className="text-gray-600">{formatDate(event.date)}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Horaires</p>
                    <p className="text-gray-600">{event.time}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  {isLocationOnline ? (
                    <Globe className="text-blue-600 mt-1" size={20} />
                  ) : (
                    <MapPin className="text-blue-600 mt-1" size={20} />
                  )}
                  <div>
                    <p className="font-medium text-gray-900">Lieu</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Places</p>
                    <p className="text-gray-600">{event.registered}/{event.capacity} inscrits</p>
                    {availableSpots <= 5 && availableSpots > 0 && (
                      <p className="text-orange-600 text-sm font-medium">
                        Plus que {availableSpots} place{availableSpots > 1 ? 's' : ''} !
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <DollarSign className="text-blue-600 mt-1" size={20} />
                  <div>
                    <p className="font-medium text-gray-900">Prix</p>
                    <p className="text-green-600 font-semibold">{event.price}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map for physical events */}
            {!isLocationOnline && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Localisation</h3>
                <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin size={32} className="mx-auto mb-2" />
                    <p className="text-sm">Carte Google Maps</p>
                    <p className="text-xs">{event.location}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Registration Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inscription</h3>
              
              {!isRegistered ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="inline mr-1" size={16} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline mr-1" size={16} />
                      Adresse e-mail *
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
                      <Phone className="inline mr-1" size={16} />
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

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                      <Building className="inline mr-1" size={16} />
                      Organisation
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

                  <button
                    type="submit"
                    disabled={isSubmitting || availableSpots <= 0}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : availableSpots <= 0 ? (
                      'Complet'
                    ) : (
                      'Confirmer mon inscription'
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    En vous inscrivant, vous acceptez de recevoir des informations 
                    sur cet événement et nos services.
                  </p>
                </form>
              ) : (
                <div className="text-center py-6">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Inscription confirmée !</h4>
                  <p className="text-gray-600 mb-4">
                    Merci pour votre inscription. Vous recevrez bientôt un e-mail de confirmation 
                    avec tous les détails pratiques.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      📧 Vérifiez votre boîte mail pour la confirmation d'inscription.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;