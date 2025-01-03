import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
  const { S } = useParams();  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    publishedYear: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/books/${S}`);
        setFormData({
          title: response.data.title || '',
          author: response.data.author || '',
          description: response.data.description || '',
          publishedYear: response.data.publishedYear || '',
        });
      } catch (error) {
        console.error('Erreur lors de la récupération du livre :', error);
        alert('Impossible de charger les données du livre.');
      }
    };

    fetchBook();
  }, [S]);  

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
      await axios.patch(`http://localhost:3000/books/${S}`, formData);
      navigate('/dashboard', { state: { successMessage: 'Livre modifié avec succès !' } });
    } catch (error) {
      console.error('Erreur lors de la modification du livre :', error);
      alert('Une erreur s\'est produite.');
    }
  };

  return (
    <div className="min-h-screen bg-stone-300 p-4 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Modifier le Livre</h2>
        <form onSubmit={handleSubmit}>
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
            Modifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
