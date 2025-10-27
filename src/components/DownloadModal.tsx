import React, { useState } from 'react';
import { X, Download, Mail, User, Building } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  resource: {
    title: string;
    type: string;
    downloadUrl: string;
  };
}

const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, resource }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically send the data to your backend
    console.log('Download request:', { ...formData, resource: resource.title });

    setIsSubmitted(true);
    setIsSubmitting(false);

    // Auto-close modal after 3 seconds
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', organization: '' });
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
              <Download className="text-white" size={20} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Télécharger la ressource</h3>
              <p className="text-sm text-gray-600">{resource.title}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubmitted ? (
            <>
              <p className="text-gray-600 mb-6">
                Pour télécharger cette ressource, veuillez remplir les informations ci-dessous. 
                Cela nous aide à mieux comprendre nos lecteurs et à améliorer nos contenus.
              </p>

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
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    <Building className="inline mr-1" size={16} />
                    Organisation (optionnel)
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

                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Download className="mr-2" size={16} />
                        Télécharger
                      </>
                    )}
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                En téléchargeant cette ressource, vous acceptez de recevoir occasionnellement 
                des informations sur nos services et publications.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Download className="text-green-600" size={24} />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Téléchargement en cours...</h4>
              <p className="text-gray-600 mb-4">
                Merci ! Votre téléchargement va commencer automatiquement. 
                Un lien de téléchargement a également été envoyé à votre adresse e-mail.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  📧 Vérifiez votre boîte mail (y compris les spams) pour le lien de téléchargement.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;