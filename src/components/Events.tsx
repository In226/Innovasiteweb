import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Video, Download, ArrowRight, Globe } from 'lucide-react';
import EventDetail from './EventDetail';

const Events = () => {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Formation : Gestion des risques climatiques pour les PME",
      type: "Formation",
      location: "Ouagadougou",
      date: "2025-02-15",
      time: "09:00 - 17:00",
      summary: "Une formation complète sur l'évaluation et la gestion des risques climatiques dans les projets d'entreprise.",
      capacity: 30,
      registered: 18,
      price: "Gratuit",
      status: "open"
    },
    {
      id: 2,
      title: "Webinaire : Innovation financière en Afrique de l'Ouest",
      type: "Webinaire",
      location: "En ligne",
      date: "2025-02-28",
      time: "14:00 - 16:00",
      summary: "Découvrez les dernières tendances en matière d'innovation financière et leur impact sur l'écosystème ouest-africain.",
      capacity: 100,
      registered: 45,
      price: "Gratuit",
      status: "open"
    },
    {
      id: 3,
      title: "Atelier : Stratégies de mobilisation de fonds pour startups",
      type: "Atelier",
      location: "Ouagadougou",
      date: "2025-03-10",
      time: "10:00 - 16:00",
      summary: "Un atelier pratique pour apprendre les meilleures stratégies de levée de fonds adaptées au contexte africain.",
      capacity: 25,
      registered: 12,
      price: "25 000 FCFA",
      status: "open"
    },
    {
      id: 4,
      title: "Conférence : L'entrepreneuriat féminin au Sahel",
      type: "Conférence",
      location: "Ouagadougou",
      date: "2025-03-25",
      time: "08:30 - 18:00",
      summary: "Une journée dédiée aux défis et opportunités de l'entrepreneuriat féminin dans la région sahélienne.",
      capacity: 150,
      registered: 89,
      price: "15 000 FCFA",
      status: "open"
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: "Formation : Digitalisation des services bancaires",
      type: "Formation",
      location: "Ouagadougou",
      date: "2024-12-10",
      summary: "Formation sur la transformation digitale des institutions financières.",
      hasVideo: true,
      hasResources: true
    },
    {
      id: 6,
      title: "Webinaire : Inclusion financière et microfinance",
      type: "Webinaire",
      location: "En ligne",
      date: "2024-11-20",
      summary: "Stratégies d'inclusion financière pour les populations marginalisées.",
      hasVideo: true,
      hasResources: false
    },
    {
      id: 7,
      title: "Atelier : Gestion de projet et suivi-évaluation",
      type: "Atelier",
      location: "Ouagadougou",
      date: "2024-10-15",
      summary: "Méthodologies de gestion de projet adaptées au contexte africain.",
      hasVideo: false,
      hasResources: true
    },
    {
      id: 8,
      title: "Conférence : Innovation et développement durable",
      type: "Conférence",
      location: "Ouagadougou",
      date: "2024-09-28",
      summary: "L'innovation comme moteur du développement durable en Afrique de l'Ouest.",
      hasVideo: true,
      hasResources: true
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleDateString('fr-FR', { month: 'short' }).toUpperCase(),
      full: date.toLocaleDateString('fr-FR', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
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

  const getLocationIcon = (location: string) => {
    return location === 'En ligne' ? <Globe size={16} /> : <MapPin size={16} />;
  };

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  // If an event is selected, show the event detail page
  if (selectedEvent) {
    return <EventDetail event={selectedEvent} onBack={handleBackToEvents} />;
  }

  return (
    <section id="evenements" className="py-20 bg-gray-50">
      {/* News Ticker */}
      <div className="bg-gradient-to-r from-blue-900 to-green-700 text-white py-3 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="bg-orange-500 px-3 py-1 rounded-full text-xs font-bold mr-4 flex-shrink-0">
              🔥 ACTUALITÉS
            </div>
            <div className="overflow-hidden flex-1">
              <div className="animate-scroll whitespace-nowrap">
                <span className="inline-block mr-12">
                  ✅ Digitalisation réussie d'une institution de microfinance : +33% d'inclusion financière
                </span>
                <span className="inline-block mr-12">
                  🚀 Lancement du programme d'incubation AgriTech avec 15 startups sélectionnées
                </span>
                <span className="inline-block mr-12">
                  🏆 InnovaScope Group remporte le Prix de l'Innovation en Inclusion Financière 2024
                </span>
                <span className="inline-block mr-12">
                  🌍 Expansion géographique : ouverture de bureaux au Mali et au Niger
                </span>
                <span className="inline-block mr-12">
                  📚 Publication du Guide de l'Inclusion Financière en Afrique de l'Ouest
                </span>
                <span className="inline-block mr-12">
                  🤝 Nouveau partenariat stratégique avec la Banque Mondiale pour le développement rural
                </span>
                {/* Duplicate for seamless loop */}
                <span className="inline-block mr-12">
                  ✅ Digitalisation réussie d'une institution de microfinance : +33% d'inclusion financière
                </span>
                <span className="inline-block mr-12">
                  🚀 Lancement du programme d'incubation AgriTech avec 15 startups sélectionnées
                </span>
                <span className="inline-block mr-12">
                  🏆 InnovaScope Group remporte le Prix de l'Innovation en Inclusion Financière 2024
                </span>
                <span className="inline-block mr-12">
                  🌍 Expansion géographique : ouverture de bureaux au Mali et au Niger
                </span>
                <span className="inline-block mr-12">
                  📚 Publication du Guide de l'Inclusion Financière en Afrique de l'Ouest
                </span>
                <span className="inline-block mr-12">
                  🤝 Nouveau partenariat stratégique avec la Banque Mondiale pour le développement rural
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

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
              Actualités et événements
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Participez à nos formations, webinaires et ateliers pour accélérer votre croissance 
              et développer vos compétences en innovation et performance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-2 -mt-8 relative z-10 mb-12 max-w-md mx-auto">
          <div className="flex">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                selectedTab === 'upcoming'
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              À venir ({upcomingEvents.length})
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                selectedTab === 'past'
                  ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Passés ({pastEvents.length})
            </button>
          </div>
        </div>

        {/* Upcoming Events */}
        {selectedTab === 'upcoming' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Événements à venir</h2>
              <p className="text-gray-600">
                Inscrivez-vous dès maintenant pour ne pas manquer nos prochains événements
              </p>
            </div>

            <div className="grid gap-6">
              {upcomingEvents.map((event) => {
                const dateInfo = formatDate(event.date);
                const availableSpots = event.capacity - event.registered;
                
                return (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      {/* Date Block */}
                      <div className="md:w-32 bg-gradient-to-br from-blue-600 to-green-600 text-white p-6 flex flex-col items-center justify-center">
                        <div className="text-3xl font-bold">{dateInfo.day}</div>
                        <div className="text-sm font-medium">{dateInfo.month}</div>
                      </div>

                      {/* Event Details */}
                      <div className="flex-1 p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                {event.type}
                              </span>
                              <div className="flex items-center space-x-1 text-gray-600 text-sm">
                                {getLocationIcon(event.location)}
                                <span>{event.location}</span>
                              </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                              {event.title}
                            </h3>

                            <p className="text-gray-600 mb-4">{event.summary}</p>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-1">
                                <Clock size={16} />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Users size={16} />
                                <span>{event.registered}/{event.capacity} inscrits</span>
                              </div>
                              <div className="font-medium text-green-600">
                                {event.price}
                              </div>
                            </div>

                            {availableSpots <= 5 && availableSpots > 0 && (
                              <div className="mt-2 text-sm text-orange-600 font-medium">
                                ⚠️ Plus que {availableSpots} place{availableSpots > 1 ? 's' : ''} disponible{availableSpots > 1 ? 's' : ''} !
                              </div>
                            )}
                          </div>

                          {/* CTA */}
                          <div className="mt-4 lg:mt-0 lg:ml-6">
                            <button className="w-full lg:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                              onClick={() => handleEventClick(event)}
                              En savoir plus
                              <ArrowRight className="ml-2" size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Past Events */}
        {selectedTab === 'past' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Événements passés</h2>
              <p className="text-gray-600">
                Retrouvez les enregistrements et supports de nos événements précédents
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => {
                const dateInfo = formatDate(event.date);
                
                return (
                  <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-center">
                            <div className="text-lg font-bold">{dateInfo.day}</div>
                            <div className="text-xs">{dateInfo.month}</div>
                          </div>
                          <div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                            <div className="flex items-center space-x-1 text-gray-600 text-sm mt-1">
                              {getLocationIcon(event.location)}
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4">{event.summary}</p>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                          {dateInfo.full}
                        </div>
                        
                        <div className="flex space-x-2">
                          {event.hasVideo && (
                            <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                              <Video size={16} />
                              <span>Vidéo</span>
                            </button>
                          )}
                          {event.hasResources && (
                            <button className="flex items-center space-x-1 text-green-600 hover:text-green-700 text-sm font-medium">
                              <Download size={16} />
                              <span>Supports</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-900 to-green-800 rounded-2xl p-8 text-white text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ne manquez aucun événement !</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour être informé en priorité de nos prochains 
            événements, formations et webinaires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;