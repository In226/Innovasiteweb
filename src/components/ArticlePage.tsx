import React from 'react';
import { ArrowLeft, Calendar, User, Share2, Download, Eye } from 'lucide-react';

interface ArticlePageProps {
  article: {
    id: number;
    title: string;
    author: string;
    date: string;
    category: string;
    summary: string;
    image: string;
    content: string;
  };
  onBack: () => void;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papiers !');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Retour aux ressources</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleShare}
                className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Share2 size={16} />
                <span className="hidden sm:inline">Partager</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Imprimer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-gray-600 mb-6">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span>{new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User size={16} />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye size={16} />
              <span>5 min de lecture</span>
            </div>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            {article.summary}
          </p>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Introduction */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'entrepreneuriat féminin en Afrique de l'Ouest, et particulièrement au Sahel, 
              représente un potentiel économique considérable encore largement sous-exploité. 
              Malgré leur dynamisme et leur créativité, les femmes entrepreneures de la région 
              font face à des défis structurels qui limitent leur capacité à développer et 
              pérenniser leurs activités économiques.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Les principaux obstacles</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Accès limité au financement</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Le manque d'accès au crédit constitue l'un des principaux freins à l'entrepreneuriat féminin. 
              Les institutions financières traditionnelles exigent souvent des garanties que les femmes 
              ne peuvent fournir, notamment en raison des inégalités dans l'accès à la propriété foncière.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Contraintes socioculturelles</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Les normes sociales et culturelles peuvent limiter la mobilité des femmes et leur 
              participation pleine aux activités économiques. La charge des responsabilités domestiques 
              et familiales constitue également un défi majeur pour l'engagement entrepreneurial.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Manque de formation et d'accompagnement</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'accès limité à la formation technique, à l'éducation financière et à l'accompagnement 
              entrepreneurial constitue un obstacle significatif au développement des compétences 
              nécessaires à la création et à la gestion d'entreprises prospères.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Opportunités et solutions</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Recommandations d'InnovaScope Group</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Développement de produits financiers adaptés aux besoins des femmes</li>
                <li>• Création de réseaux de mentorat et d'accompagnement</li>
                <li>• Formation en compétences entrepreneuriales et digitales</li>
                <li>• Facilitation de l'accès aux marchés locaux et régionaux</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              L'entrepreneuriat féminin au Sahel représente un levier essentiel pour le développement 
              économique inclusif de la région. En s'attaquant aux obstacles structurels et en 
              développant des solutions adaptées, il est possible de libérer ce potentiel et de 
              contribuer à une croissance économique plus équitable et durable.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">À propos de l'auteur</h4>
              <p className="text-blue-700 text-sm">
                {article.author} est expert en communication institutionnelle et développement 
                de réseaux d'affaires chez InnovaScope Group. Il accompagne les entrepreneurs 
                et les institutions dans leurs stratégies de croissance inclusive.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-900 to-green-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Besoin d'accompagnement ?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            InnovaScope Group accompagne les entrepreneurs et les institutions dans le développement 
            de stratégies inclusives et performantes.
          </p>
          <button
            onClick={onBack}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Découvrir nos services
          </button>
        </div>
      </article>
    </div>
  );
};

export default ArticlePage;