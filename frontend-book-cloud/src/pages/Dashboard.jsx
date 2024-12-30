import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const goToCreateBook = () => navigate('/create-book');
    const location = useLocation();
    const successMessage = location.state?.successMessage;
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bienvenue sur le Dashboard</h1>
        <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord</h1>
      {successMessage && (
        <div className="mb-4 p-4 bg-green-200 text-green-800 rounded">
          {successMessage}
        </div>
      )}
      {/* Autres contenus du tableau de bord */}
    </div>
      </div>

      <div className="flex gap-8">
        {/* Left Column */}
        <div className="w-2/3 space-y-8">
          {/* Statistics Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Statistiques</h3>
            <p className="text-gray-600">Utilisateurs actifs: 256</p>
            <p className="text-gray-600">Commandes en attente: 12</p>
          </div>

          {/* Notifications Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h3>
            <ul className="space-y-3">
              <li className="text-gray-600">Nouvelle commande reçue</li>
              <li className="text-gray-600">Utilisateur inscrit: John Doe</li>
              <li className="text-gray-600">Réinitialisation de mot de passe demandée</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 space-y-8">
          {/* Quick Actions Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Actions Rapides</h3>
            <div className="space-y-4">
              <button onClick={goToCreateBook} className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none">Ajouter un livre</button>
              <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none">Gérer les utilisateurs</button>
              <button className="w-full py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none">Paramètres</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
