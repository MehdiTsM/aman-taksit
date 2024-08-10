import React from 'react';
import { Link } from 'react-router-dom';

function AdminPage() {
  return (
    <div className="animate-fadeInUp">
      {/* Header Section */}
      <div className="bg-customOrange flex flex-col md:flex-row justify-center p-4 md:p-6 items-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-customWhite">Tableau de Bord Admin</h1>
      </div>

      {/* Navigation Section */}
      <div className="bg-customDarkGreen p-4 md:p-6 text-center text-customWhite">
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
          <Link to="/admin/ajouter-produit">
            <h2 className="transition text-xl md:text-2xl hover:text-customOrange">Ajouter Produit</h2>
          </Link>
          <Link to="/admin/gerer-produits">
            <h2 className="transition text-xl md:text-2xl hover:text-customOrange">Gérer Produits</h2>
          </Link>
          <Link to="/admin/statistiques">
            <h2 className="transition text-xl md:text-2xl hover:text-customOrange">Statistiques</h2>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-4 md:mx-16 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Management Card */}
          <Link to="/admin/gerer-produits" className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-customDarkGreen mb-4">Gérer Produits</h3>
            <p className="text-lg text-gray-600">Ajouter, modifier ou supprimer des produits dans votre catalogue.</p>
          </Link>

          {/* Statistics Card */}
          <Link to="/admin/statistiques" className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-customDarkGreen mb-4">Statistiques</h3>
            <p className="text-lg text-gray-600">Consulter les statistiques de vos ventes et performances.</p>
          </Link>

          {/* User Management Card */}
          <Link to="/admin/gerer-utilisateurs" className="border border-gray-300 rounded-lg shadow-lg bg-customWhite p-4 hover:border-customOrange hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-customDarkGreen mb-4">Gérer Utilisateurs</h3>
            <p className="text-lg text-gray-600">Gérer les utilisateurs administrateurs de la plateforme.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;