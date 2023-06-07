import React from 'react';
import { BookData } from './types';
import './Book.css';

interface BookProps extends BookData {
  onAddToCart: () => void;
}

const Book: React.FC<BookProps> = ({ onAddToCart, ...book }) => {
  const imagePath = require(`../components/ima/${book.imageUrl}`).default;


  return (
    <div className="book-card">
      <div className="book-details">
        <h2 className="book-title">{book.title}</h2>
        <img src={imagePath} alt={book.title} className="book-image" />   
        <p className="book-author">{book.author}</p>
        <p className="book-description">{book.description}</p>
        <p className="book-price">${book.price}</p>
      </div>
      <button className="book-btn" onClick={onAddToCart}>
        Adicionar aos Favoritos
      </button>
    </div>
  );
};

export default Book;
