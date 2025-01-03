import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const [formData, setFormData] = useState({
    S: '',
    title: '',
    author: '',
    description: '',
    publishedYear: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/books', formData);
      console.log('Livre ajouté :', response.data);
      navigate('/dashboard', { state: { successMessage: 'Livre ajouté avec succès !' } });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre :', error);
      alert('Une erreur s\'est produite.');
    }
  };
  return (
    <div className="min-h-screen bg-stone-300 p-4 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Ajouter un Livre</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="S"
            placeholder="S"
            value={formData.S}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="title"
            placeholder="Titre"
            value={formData.title}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="author"
            placeholder="Auteur"
            value={formData.author}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="description"
            placeholder="Description"
            rows="3"
            value={formData.description}
            onChange={handleChange}
            className="w-full mb-3 p-2 border rounded focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <input
            type="number"
            name="publishedYear"
            placeholder="Année de publication"
            value={formData.publishedYear}
            onChange={handleChange}
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