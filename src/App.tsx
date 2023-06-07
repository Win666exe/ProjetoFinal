import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Book from './components/Book/Book';
import CartPage from './components/CartPage/CartPage';
import { BookData } from './components/types';
import './App.css';
import './navbar.css';
import Jogo from './components/Jogo/Jogo';
import livro from './components/data/livro.json';


const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<BookData[]>([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    setCartItemCount(cartItems.length);
    setCartTotalPrice(calculateTotalPrice(cartItems));
  }, [cartItems]);

  

  const addToCart = (book: BookData) => {
    const isBookInCart = cartItems.some((item) => item.id === book.id);
    setCartItems((prevItems) => [...prevItems, book]);
  };

  const removeFromCart = (bookId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== bookId));
  };

  const calculateTotalPrice = (items: BookData[]) => {
    return items.reduce((total, item) => total + item.price, 0);
  };
  const bookData: BookData[] = livro;

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">
                Favoritos <span className="cart-item-count">({cartItemCount})</span> ${cartTotalPrice.toFixed(2)}
              </Link>
            </li>
            <li>
              <Link to="/jogo">Jogo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="book-list">
                {bookData.map((book) => (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    imageUrl={book.imageUrl}
                    price={book.price}
                    onAddToCart={() => addToCart(book)}
                  />
                ))}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage cartItems={cartItems.slice()} onRemoveFromCart={removeFromCart} />} />
          <Route path="/jogo" element={<Jogo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;