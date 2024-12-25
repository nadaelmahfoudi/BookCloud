import React from 'react';
import Book from '../assets/BookStore.webp';

const Container = () => {
  return (
    <header>
      <div
        className="w-full bg-center bg-cover h-[38rem]"
        style={{
            backgroundImage: `url(${Book})`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white lg:text-4xl">
            Discover your next favorite book with ease—your one-stop online <span className="text-stone-800">BookStore</span> for every genre and every reader!
            </h1>
            <button
              className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-stone-700 hover:bg-stone-800 rounded-md lg:w-auto  focus:outline-none "
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Container;
