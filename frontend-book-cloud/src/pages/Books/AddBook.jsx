import React from 'react';

const CreateBook = () => {
  return (
    <div className="min-h-screen bg-stone-300 p-4 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Ajouter un Livre</h2>
        <form>
          <input
            type="text"
            placeholder="Titre"
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Auteur"
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Description"
            rows="3"
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <input
            type="number"
            placeholder="Année de publication"
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-stone-600 text-white py-2 rounded hover:bg-stone-500"
          >
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBook;
