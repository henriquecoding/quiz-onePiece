import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <link rel="shortcut icon" href="../img/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <meta name="title" content="One Piece - Quiz" />
        <meta name="description" content="Um quiz que testa seus conhecimentos em uma das melhores obras de animação atualmente e já a um bom tempo haha, foi criada na Imersão React v2 da Alura." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quiz-one-piece.henpassquesori.vercel.app/" />
        <meta property="og:title" content="One Piece - Quiz" />
        <meta property="og:description" content="Um quiz que testa seus conhecimentos em uma das melhores obras de animação atualmente e já a um bom tempo haha, foi criada na Imersão React v2 da Alura." />
        <meta property="og:image" content="../img/one-piece-quiz.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://quiz-one-piece.henpassquesori.vercel.app/" />
        <meta property="twitter:title" content="One Piece - Quiz" />
        <meta property="twitter:description" content="Um quiz que testa seus conhecimentos em uma das melhores obras de animação atualmente e já a um bom tempo haha, foi criada na Imersão React v2 da Alura." />
        <meta property="twitter:image" content="../img/one-piece-quiz.jpg" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
