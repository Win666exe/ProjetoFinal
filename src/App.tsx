import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Book from './components/Book';
import CartPage from './components/CartPage';
import { BookData } from './components/types';
import './App.css';
import './navbar.css';
import Jogo from './components/Jogo';


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
  const bookData: BookData[] = [
    {
      id: 1,
      title: 'O Demonologista',
      author: 'Andrew Pyper',
      description: 'David Ullman é um renomado professor da Universidade de Columbia, especializado em mitologia e literatura religiosa. Mas a sua paixão é o Gólgota, um volume lendário que carrega a história do Inferno em suas páginas. David é convidado para testemunhar um fenômeno peculiar: um estranho assume a forma de professor da universidade e comete um crime brutal diante dos olhos de todos. Mas esse não é o fim, é apenas o começo.',
      imageUrl: 'demo.jpg',
      price: 39.90,
    },
    {
      id: 2,
      title: 'Edgar Allan Poe: Medo Clássico',
      author: 'Edgar Allan Poe',
      description: 'Esta antologia apresenta os contos que se tornaram clássicos da literatura de horror e suspense. Com histórias como "O Gato Preto", "A Queda da Casa de Usher" e "O Coração Denunciador", o mestre do terror Edgar Allan Poe mergulha o leitor em um mundo sombrio e perturbador, repleto de mistério, medo e angústia.',
      imageUrl: 'alan poe.jpg',
      price: 49.90,
    },
    {
      id: 3,
      title: 'A Menina Submersa: Memórias',
      author: 'Caitlín R. Kiernan',
      description: 'India Morgan Phelps, ou Imp, é uma personagem complexa e perturbadora, que narra sua história por meio de fragmentos de memória, devaneios, mistério e horror. Kiernan cria uma atmosfera única e envolvente neste romance dark que explora os limites da sanidade e da realidade.',
      imageUrl: 'menina sub memo.jpg',
      price: 54.90,
    },
    {
      id: 4,
      title: 'O Circo Mecânico Tresaulti',
      author: 'Genevieve Valentine',
      description: 'Em um mundo pós-apocalíptico, o Circo Mecânico Tresaulti viaja pelas cidades levando um espetáculo de acrobacias e maravilhas mecânicas. Valentine tece uma trama mágica e sombria, explorando temas como a imortalidade, a natureza da humanidade e os limites do corpo e da alma.',
      imageUrl: 'circo.png',
      price: 42.90,
    },
    {
      id: 5,
      title: 'Frankenstein: A Obra-Prima de Mary Shelley',
      author: 'Mary Shelley',
      description: 'Publicado originalmente em 1818, "Frankenstein" é um clássico da literatura gótica e um dos maiores ícones da ficção científica. A obra aborda questões como a ética na ciência, a criação e a responsabilidade humana, envolvendo o leitor em uma trama repleta de suspense e horror.',
      imageUrl: 'frankilinho.jpg',
      price: 37.90,
    },
    {
      id: 6,
      title: 'Psicose',
      author: 'Robert Bloch',
      description: 'Norman Bates é um personagem icônico da literatura e do cinema de terror. Neste livro, Bloch nos apresenta a história por trás do clássico filme de Alfred Hitchcock, revelando os segredos obscuros do motel Bates e a mente perturbada de seu proprietário. Prepare-se para entrar na mente de um dos assassinos mais famosos da cultura pop.',
      imageUrl: 'Psicose.jpg',
      price: 36.90,
    },
    {
      id: 7,
      title: 'O Vampiro Lestat',
      author: 'Anne Rice',
      description: 'Neste segundo volume das Crônicas Vampirescas, Anne Rice nos apresenta Lestat, um vampiro carismático e sedutor que narra sua história desde a transformação até a vida noturna como um ser das trevas. Com uma prosa envolvente e atmosfera gótica, a autora nos mergulha em um mundo de desejo, sangue e imortalidade.',
      imageUrl: 'vampinho.webp',
      price: 45.90,
    },
    {
      id: 8,
      title: 'Horror na Colina de Darrington',
      author: 'Marcus Barcelos',
      description: 'Em "Horror na Colina de Darrington", Marcus Barcelos constrói um thriller sobrenatural repleto de mistério e tensão. O livro acompanha a história de Nicolas, um garoto que descobre uma sombria conexão com a colina de Darrington e precisa enfrentar seus próprios medos para desvendar os segredos do lugar.',
      imageUrl: 'Ocolina.jpg',
      price: 32.90,
    },
    {
      id: 9,
      title: 'O Mal Nosso de Cada Dia',
      author: 'Donald Ray Pollock',
      description: 'Este livro é um mergulho nas profundezas da crueldade humana. Ambientado em uma região remota dos Estados Unidos após a Segunda Guerra Mundial, "O Mal Nosso de Cada Dia" retrata personagens perturbadores e uma série de eventos violentos que exploram o lado mais sombrio da natureza humana.',
      imageUrl: 'oMalNossoDeCadaDia.jpg',
      price: 47.90,
    },
    {
      id: 10,
      title: 'O Iluminado',
      author: 'Stephen King',
      description: 'Neste clássico do mestre do terror Stephen King, acompanhamos a história da família Torrance, que se muda para o Hotel Overlook. Conforme o inverno se instala, o isolamento e os segredos do hotel começam a afetar a sanidade do pai, Jack, e o dom sobrenatural do filho, Danny. Um suspense psicológico que explora os horrores da mente humana.',
      imageUrl: 'lumi.jpeg',
      price: 29.90,
    },
    {
      id: 11,
      title: 'O Exorcista',
      author: 'William Peter Blatty',
      description: 'Uma garota de 12 anos é possuída por uma entidade demoníaca, e cabe a dois padres realizar o exorcismo. Esta obra-prima do terror explora temas de fé, possessão e o confronto entre o bem e o mal. Com uma narrativa angustiante, "O Exorcista" é um dos livros mais assustadores já escritos.',
      imageUrl: 'exor.webp',
      price: 34.90,
    },
    {
      id: 12,
      title: 'Misery',
      author: 'Stephen King',
      description: 'Paul Sheldon é um famoso escritor que sofre um grave acidente de carro e é resgatado por sua fã número um, Annie Wilkes. No entanto, Annie é uma mulher perturbada e obcecada pela série de livros de Paul. O que começa como um gesto de bondade rapidamente se transforma em um pesadelo claustrofóbico. "Misery" é um thriller psicológico intenso e arrepiante.',
      imageUrl: 'misery.jpg',
      price: 31.90,
    },
    {
      id: 13,
      title: 'O Chamado de Cthulhu e Outros Contos',
      author: 'H.P. Lovecraft',
      description: 'Esta coletânea reúne alguns dos melhores contos de horror do mestre do terror cósmico, H.P. Lovecraft. Entre eles, destaca-se "O Chamado de Cthulhu", que introduz a entidade cósmica Cthulhu e mergulha o leitor em um universo de criaturas monstruosas e antigos deuses adormecidos.',
      imageUrl: 'cth.jpg',
      price: 39.90,
    },
    {
      id: 14,
      title: 'Drácula',
      author: 'Bram Stoker',
      description: 'O romance gótico mais famoso da literatura, "Drácula" narra a história do vampiro mais icônico de todos os tempos. Com uma narrativa epistolar, o livro nos transporta para a Transilvânia e para a luta entre o Conde Drácula e um grupo de heróis determinados a destruí-lo. Uma obra atemporal que definiu o gênero do terror.',
      imageUrl: 'dracu.webp',
      price: 37.90,
    },
    {
      id: 15,
      title: 'O Médico e o Monstro',
      author: 'Robert Louis Stevenson',
      description: 'Nesta novela clássica, acompanhamos o Dr. Jekyll, um respeitado médico, e seu estranho relacionamento com o sinistro Sr. Hyde. À medida que a história se desenrola, somos confrontados com os lados opostos da natureza humana e os limites da ciência. "O Médico e o Monstro" é uma obra emblemática do terror psicológico.',
      imageUrl: 'med.jpg',
      price: 25.90,
    },
    {
      id: 16,
      title: 'It: A Coisa',
      author: 'Stephen King',
      description: 'Um grupo de amigos enfrenta seus piores medos quando uma entidade maligna conhecida como Pennywise ressurge na cidade de Derry. "It: A Coisa" é um épico do terror que mescla passado e presente, explorando a infância e a vida adulta dos personagens. Uma história arrepiante e envolvente que captura a imaginação do leitor.',
      imageUrl: 'it.jpg',
      price: 42.90,
    },
    {
      id: 17,
      title: 'O Cemitério',
      author: 'Stephen King',
      description: 'Louis Creed se muda para uma casa próxima a um antigo cemitério indígena, onde os mortos não descansam em paz. Quando uma tragédia atinge sua família, Louis toma uma decisão desesperada que desencadeia uma série de eventos sobrenaturais e horrores inimagináveis. "O Cemitério" é um conto sombrio sobre luto, sacrifício e os limites da vida e da morte.',
      imageUrl: 'cemi.JPG',
      price: 28.90,
    },
    {
      id: 20,
      title: 'O Bebê de Rosemary',
      author: 'Ira Levin',
      description: 'Rosemary e Guy Woodhouse se mudam para um prédio em Nova York, onde são cercados por vizinhos estranhos e eventos perturbadores. Conforme a gravidez de Rosemary avança, ela começa a suspeitar que algo está terrivelmente errado com seu bebê. "O Bebê de Rosemary" é um suspense sinistro e cheio de suspense.',
      imageUrl: 'obr.jpg',
      price: 30.90,
    },
    {
      id: 21,
      title: 'Coraline',
      author: 'Neil Gaiman',
      description: 'Nesta obra infantojuvenil sombria, Coraline descobre uma porta secreta em sua casa que leva a uma versão alternativa e assustadora de sua vida. Lá, ela encontra uma "outra mãe" e um mundo cheio de perigos. "Coraline" é uma história envolvente que mescla fantasia e terror de maneira única.',
      imageUrl: 'cor.webp',
      price: 23.90,
    },
    {
      id: 22,
      title: 'Hellraiser',
      author: 'Clive Barker',
      description: 'Quando Frank Cotton obtém uma caixa de quebra-cabeças misteriosa, ele acaba abrindo as portas para um reino de prazer e dor além da compreensão humana. Os Cenobitas, criaturas monstruosas e sádicas, são convocados, e cabe a um grupo de personagens lutarem contra eles. "Hellraiser" é uma história visceral e macabra.',
      imageUrl: 'he.jpg',
      price: 35.90,
    },
    {
      id: 23,
      title: 'A Assombração da Casa da Colina',
      author: 'Shirley Jackson',
      description: 'Quatro pessoas se reúnem em uma mansão supostamente assombrada para investigar atividades paranormais. À medida que os eventos sobrenaturais aumentam, a linha entre o real e o imaginário se torna tênue. "A Assombração da Casa da Colina" é um clássico do horror psicológico, cheio de suspense e atmosfera sombria.',
      imageUrl: 'col.jpg',
      price: 32.90,
    },/*
    {
      id: 24,
      title: 'Entrevista com o Vampiro',
      author: 'Anne Rice',
      description: 'Louis, um jovem fazendeiro, é transformado em vampiro por Lestat, um ser sedutor e cruel. Através das páginas de um diário, Louis compartilha sua jornada imortal, revelando os prazeres e tormentos de ser um vampiro. "Entrevista com o Vampiro" é uma história envolvente que explora temas de imortalidade e moralidade.',
      imageUrl: 'https://example.com/book24.jpg',
      price: 38.90,
    },
    {
      id: 26,
      title: 'O Silêncio dos Inocentes',
      author: 'Thomas Harris',
      description: 'Clarice Starling, uma jovem agente do FBI, é designada para entrevistar Hannibal Lecter, um famoso psiquiatra e assassino em série. Enquanto busca sua ajuda para capturar outro assassino, Clarice se vê envolvida em um jogo perigoso de manipulação e suspense. "O Silêncio dos Inocentes" é um thriller psicológico que prende o leitor do início ao fim.',
      imageUrl: 'https://example.com/book26.jpg',
      price: 34.90,
    },
  {
    id: 29,
    title: 'A Estrada da Noite',
    author: 'Joe Hill',
    description: 'Ig Perrish acorda após uma noite de bebedeira e descobre que chifres cresceram em sua cabeça. Além disso, as pessoas ao seu redor confessam seus pecados e desejos mais obscuros. Determinado a descobrir a verdade por trás desses eventos, Ig embarca em uma jornada sombria. "A Estrada da Noite" é um thriller sobrenatural repleto de suspense e reviravoltas.',
    imageUrl: 'https://example.com/book30.jpg',
    price: 28.90,
  },
    {
        id: 30,
        title: "1984",
        author: "George Orwell",
        description: "Um clássico da distopia, onde o governo totalitário controla cada aspecto da vida das pessoas. Winston Smith, o protagonista, busca resistir às opressões do regime.",
        imageUrl: "link da imagem",
        price: 27.90
        
    },
    {
        id: 31,
        title: "A Revolução dos Bichos",
        author: "George Orwell",
        description: "Uma sátira política que retrata animais de uma fazenda que se rebelam contra seus donos humanos, mas acabam criando uma nova forma de tirania.",
        imageUrl: "link da imagem", 
        price: 23.50
    },
    {
        id: 32,
        title: "Crime e Castigo",
        author: "Fiódor Dostoiévski",
        description: "A história de um estudante pobre que comete um assassinato e é atormentado por sua consciência. Um livro que explora a psicologia humana e a busca pela redenção.",
        imageUrl: "link da imagem",
        price: 35.00
    },
    {
        id: 33,
        title: "O Grande Gatsby",
        author: "F. Scott Fitzgerald",
        description: "Situado na década de 1920, retrata a história de Jay Gatsby, um homem rico e misterioso que busca reconquistar o amor de sua vida, Daisy Buchanan.",
        price: 29.90,
        imageUrl: "link da imagem"
    },
    {
        id: 34,
        title: "Cem Anos de Solidão",
        author: "Gabriel García Márquez",
        description: "Uma saga familiar que abrange várias gerações, com elementos de realismo mágico. Uma obra-prima da literatura latino-americana.",
        imageUrl: "link da imagem",
        price: 42.00
    },
    {
      id: 35,
      title: "A Menina que Roubava Livros",
      author: "Markus Zusak",
      description: "A história de Liesel Meminger, uma jovem que encontra refúgio nos livros durante a Segunda Guerra Mundial, roubando obras para compartilhar com os outros.",
      imageUrl: "link da imagem",
      price: 31.50
  },*/
  ];

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