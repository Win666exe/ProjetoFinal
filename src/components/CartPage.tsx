// components/CartPage.tsx

import React from 'react';
import { BookData } from './types';
import CartItem from './CartItem';
import './CartPage.css';

interface CartPageProps {
cartItems: BookData[];
onRemoveFromCart: (bookId: number) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, onRemoveFromCart }) => {
const handleRemoveFromCart = (bookId: number) => {
onRemoveFromCart(bookId);
};

return (
<div className="cart-page">
<h1>Favoritos</h1>
{cartItems.length === 0 ? (
<p>O favoritos está vazio.</p>
) : (
<ul className="cart-item-list">
{cartItems.map((book) => (
<CartItem key={book.id} book={book} onRemoveFromCart={() => handleRemoveFromCart(book.id)} />
))}
</ul>
)}
</div>
);
};

export default CartPage;