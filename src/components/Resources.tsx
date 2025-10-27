import React, { useState } from 'react';
import { Search, Filter, Download, ExternalLink, Calendar, User, FileText, BookOpen, TrendingUp } from 'lucide-react';
import DownloadModal from './DownloadModal';
import ArticlePage from './ArticlePage';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [downloadModal, setDownloadModal] = useState<{
    isOpen: boolean;
    resource: { title: string; type: string; downloadUrl: string } | null;
  }>({ isOpen: false, resource: null });
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Toutes les ressources', color: 'gray' },
    { id: 'publication', name: 'Publications', color: 'orange' },
    { id: 'article', name: 'Articles de blog', color: 'blue' },
    { id: 'etude', name: 'Études de cas', color: 'green' },
    { id: 'guide', name: 'Guides pratiques', color: 'purple' }
  ];

  const resources = [
    {
      id: 1,
      title: "Guide de l'inclusion financière en Afrique de l'Ouest",
      category: 'publication',
      author: 'DAO Souleymane',
      date: '2024-12-15',
      summary: 'Un guide complet sur les stratégies d\'inclusion financière adaptées au contexte ouest-africain, avec des exemples concrets et des recommandations pratiques.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pdf',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Digitalisation des services bancaires : Retour d\'expérience',
      category: 'etude',
      author: 'Équipe InnovaScope',
      date: '2024-11-28',
      summary: 'Analyse détaillée de la transformation digitale d\'une institution de microfinance au Burkina Faso, avec les résultats obtenus et les leçons apprises.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'article',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Les défis de l\'entrepreneuriat féminin au Sahel',
      category: 'article',
      author: 'Responsable Communication',
      date: '2024-11-10',
      summary: 'Exploration des obstacles et opportunités pour les femmes entrepreneures dans la région sahélienne, avec des recommandations pour un accompagnement efficace.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'article',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Manuel de gestion des risques climatiques',
      category: 'guide',
      author: 'Consultant Senior',
      date: '2024-10-22',
      summary: 'Guide pratique pour l\'évaluation et la gestion des risques climatiques dans les projets de développement économique en Afrique de l\'Ouest.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pdf',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Innovation financière : Tendances 2024',
      category: 'publication',
      author: 'DAO Souleymane',
      date: '2024-09-15',
      summary: 'Analyse des dernières tendances en matière d\'innovation financière et leur impact potentiel sur l\'écosystème financier ouest-africain.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pdf',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Stratégies de mobilisation de fonds pour startups',
      category: 'guide',
      author: 'Équipe InnovaScope',
      date: '2024-08-30',
      summary: 'Guide complet pour les entrepreneurs souhaitant lever des fonds, avec des conseils pratiques et des modèles de documents.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: 'pdf',
      downloadUrl: '#'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'gray';
  };

  const getCategoryColorClasses = (color: string) => {
    const colorMap = {
      orange: 'bg-orange-100 text-orange-800',
      blue: 'bg-blue-100 text-blue-800',
      green: 'bg-green-100 text-green-800',
      purple: 'bg-purple-100 text-purple-800',
      gray: 'bg-gray-100 text-gray-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  const handleDownload = (resource: any) => {
    if (resource.type === 'pdf') {
      setDownloadModal({
        isOpen: true,
        resource: {
          title: resource.title,
          type: resource.type,
          downloadUrl: resource.downloadUrl
        }
      });
    } else {
      // For articles, show the full article page
      const fullArticle = {
        ...resource,
        content: `Contenu complet de l'article "${resource.title}"...`
      };
      setSelectedArticle(fullArticle);
    }
  };

  const closeDownloadModal = () => {
    setDownloadModal({ isOpen: false, resource: null });
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText size={16} />;
      case 'article':
        return <BookOpen size={16} />;
      default:
        return <TrendingUp size={16} />;
    }
  };

  // If an article is selected, show the article page
  if (selectedArticle) {
    return <ArticlePage article={selectedArticle} onBack={closeArticle} />;
  }

  return (
    <section id="ressources" className="py-20 bg-gray-50">
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
              Centre de Ressources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explorez nos analyses, publications et articles pour rester à la pointe de l'innovation 
              et de la performance en Afrique de l'Ouest.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 -mt-8 relative z-10 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher dans nos ressources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            {filteredResources.length} ressource{filteredResources.length > 1 ? 's' : ''} trouvée{filteredResources.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColorClasses(getCategoryColor(resource.category))}`}>
                    {categories.find(cat => cat.id === resource.category)?.name}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {resource.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(resource.date).toLocaleDateString('fr-FR')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{resource.author}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.summary}
                </p>

                {/* CTA Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    {getTypeIcon(resource.type)}
                    <span className="capitalize">{resource.type}</span>
                  </div>
                  
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleDownload(resource);
                    }}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 text-sm"
                  >
                    {resource.type === 'pdf' ? (
                      <>
                        <Download size={16} />
                        <span>Télécharger</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink size={16} />
                        <span>Lire l'article</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucune ressource trouvée</h3>
            <p className="text-gray-600 mb-6">
              Essayez de modifier vos critères de recherche ou de filtrage.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-900 to-green-800 rounded-2xl p-8 text-white text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Restez informé de nos dernières publications</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Abonnez-vous à notre newsletter pour recevoir nos dernières analyses, 
            études de cas et guides pratiques directement dans votre boîte mail.
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

      {/* Download Modal */}
      {downloadModal.resource && (
        <DownloadModal
          isOpen={downloadModal.isOpen}
          onClose={closeDownloadModal}
          resource={downloadModal.resource}
        />
      )}
    </section>
  );
};

export default Resources;