import React from 'react';
import { BookData } from '../types';
import './CartItem.css'; // Importe o arquivo CSS do componente CartItem

interface CartItemProps {
  book: BookData;
  onRemoveFromCart: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ book, onRemoveFromCart }) => {
  return (
    <div className="cart-item book-card"> {/* Adicione a classe book-card */}
      <div className="cart-item-details">
        <img src={book.imageUrl} alt={book.title} className="cart-item-image" />
        <div className="cart-item-info">
          <h3 className="cart-item-title">{book.title}</h3>
          <p className="cart-item-author">{book.author}</p>
          <p className="cart-item-description">{book.description}</p>
          <p className="cart-item-price">${book.price}</p>
        </div>
      </div>
      <button className="cart-item-remove" onClick={() => onRemoveFromCart(book.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
