export interface BookData {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string; 
  price: number;
}

export interface BookProps {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  price: number;
  isBookInCart: boolean; 
  onAddToCart: () => void;
  book: BookData;
  addToCart: (book: BookData) => void;
  removeFromCart: (bookId: number) => void;
}

export interface CartPageProps {
  onRemoveFromCart: (bookId: number) => void;
  cartItems: BookData[];
  cartTotalPrice: number;
}

export type JogoProps = {
  onPontosChange: (pontos: number) => void;
};


