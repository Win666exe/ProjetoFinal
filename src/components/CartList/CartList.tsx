// components/CartList.tsx

import React from 'react';
import { BookData } from '../types';
import CartItem from '../CartItem/CartItem';
import './CartList.css';

interface CartListProps {
  cartItems: BookData[];
  onRemoveFromCart: (id: number) => void;
}

const CartList: React.FC<CartListProps> = ({ cartItems, onRemoveFromCart }) => {
  const calculateTotal = (): number => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-list">
      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={index} book={item} onRemoveFromCart={() => onRemoveFromCart(item.id)} />
        ))}
      </ul>
      <p className="cart-total">Total: ${calculateTotal()}</p>
    </div>
  );
};

export default CartList;
