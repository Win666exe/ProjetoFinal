import React, { useState, useEffect } from 'react';
import './Jogo.css';
import '../../navbar.css';
import { Helmet } from 'react-helmet';

const Jogo = () => {
  const [tabuleiro, setTabuleiro] = useState<string[]>(Array(9).fill(''));
  const [jogadorAtual, setJogadorAtual] = useState('Computador');
  const [vencedor, setVencedor] = useState('');
  const [pontos, setPontos] = useState(0);
  const [modoJogo, setModoJogo] = useState('Com Bot');

  useEffect(() => {
    if (jogadorAtual === 'Computador' && vencedor === '' && modoJogo === 'Com Bot') {
      fazerJogadaSite();
    }
  }, [jogadorAtual, vencedor, modoJogo]);

  const handleClick = (index: number) => {
    if (tabuleiro[index] === '' && vencedor === '') {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[index] = jogadorAtual === 'Você' ? 'X' : 'O';
      setTabuleiro(novoTabuleiro);

      const novoJogador = jogadorAtual === 'Você' ? 'Computador' : 'Você';
      setJogadorAtual(novoJogador);

      const resultado = verificarVencedor(novoTabuleiro);
      if (resultado !== '') {
        setVencedor(resultado);
        setPontos((prevPontos) => prevPontos + 1);
      }
    }
  };

  const verificarVencedor = (tabuleiro: string[]): string => {
    const linhasVencedoras = [
      [0, 1, 2], // Linhas horizontais
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // Linhas verticais
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // Diagonais
      [2, 4, 6],
    ];
  
    for (let i = 0; i < linhasVencedoras.length; i++) {
      const [a, b, c] = linhasVencedoras[i];
      if (tabuleiro[a] !== '' && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
        if (tabuleiro[a] === 'X') {
          return 'Você venceu'; // Retorna 'Você venceu' caso o jogador vença
        } else {
          return 'Computador venceu'; // Retorna 'Computador venceu' caso o computador vença
        }
      }
    }
  
    if (!tabuleiro.includes('')) {
      return 'Empate'; // Retorna 'Empate' caso não haja mais jogadas disponíveis
    }
  
    return ''; // Retorna uma string vazia caso o jogo ainda esteja em andamento
  };

  const fazerJogadaSite = () => {
    const jogadaDisponivel = tabuleiro.findIndex((valor) => valor === '');
    if (jogadaDisponivel !== -1) {
      const novoTabuleiro = [...tabuleiro];
      novoTabuleiro[jogadaDisponivel] = 'O';
      setTabuleiro(novoTabuleiro);

      const resultado = verificarVencedor(novoTabuleiro);
      if (resultado !== '') {
        setVencedor(resultado);
        setPontos((prevPontos) => prevPontos + 1);
      } else {
        setJogadorAtual('Você');
      }
    }
  };

  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(''));
    setJogadorAtual(modoJogo === 'Com Bot' ? 'Computador' : 'Jogador 1');
    setVencedor('');
    setPontos(0);
  };

  const calcularGanhos = (): number => {
    return Math.floor(pontos / 1000) * 0.5;
  };

  const selecionarModoJogo = (modo: string) => {
    setModoJogo(modo);
    reiniciarJogo();
  };

  return (
    <div>
      <Helmet>
        <style>{`
          body {
            background-color: #202020;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
          }
        `}</style>
      </Helmet>
      <div className="modo-jogo">
        <button className={modoJogo === 'Com Bot' ? 'active' : ''} onClick={() => selecionarModoJogo('Com Bot')}>
          Com Bot
        </button>
        <button className={modoJogo === 'Sem Bot' ? 'active' : ''} onClick={() => selecionarModoJogo('Sem Bot')}>
          Sem Bot
        </button>
      </div>
      <div className="tabuleiro">
        {tabuleiro.map((valor, index) => (
          <div className="celula" key={index} onClick={() => handleClick(index)}>
            {valor}
          </div>
        ))}
      </div>
      {vencedor !== '' && (
        <div>
          {vencedor === 'Empate' ? (
            <p>Empate!</p>
          ) : (
            <p>{vencedor}</p>
          )}
          <button onClick={reiniciarJogo}>Reiniciar</button>
        </div>
      )}
    </div>
  );
};

export default Jogo;
