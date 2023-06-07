// components/Cart.tsx

import React from 'react';
import { BookData } from './types';
import './Cart.css';

interface CartProps {
  cartItems: Array<{ title: string; author: string; description: string; imageUrl: string }>;
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div>
      <h2>Itens Favoritos</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.description}</p>
          <img src={item.imageUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
};

export default Cart;
