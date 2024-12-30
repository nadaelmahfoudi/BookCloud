import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import DefaultBookImage from '../../assets/default-book.jpg'; 
import { useNavigate } from 'react-router-dom';

const BooksList = () => {
    const [books, setBooks] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:3000/books'); 
                setBooks(response.data); 
            } catch (error) {
                setError(error.message || 'Failed to fetch books'); 
            } finally {
                setLoading(false); 
            }
        };

        fetchBooks();
    }, []); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Liste des livres</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                    <div key={book.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                        <div className="relative mb-4">
                            <img
                                src={DefaultBookImage}  
                                alt={book.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 mb-2">{book.title}</h3>
                        <p className="text-gray-600 mb-2"><strong>Auteur:</strong> {book.author}</p>
                        <p className="text-gray-600 mb-4"><strong>Date de publication:</strong> {book.publishedYear}</p>
                        <div className="flex gap-4">
                            <button
                                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none transition-colors duration-300"
                            >
                                Détails
                            </button>
                            <button
                                className="py-2 px-4 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 focus:outline-none transition-colors duration-300"
                            >
                                Modifier
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksList;
