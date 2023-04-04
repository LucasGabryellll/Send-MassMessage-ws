import React from 'react';

import { Header } from '../../components/Nav';
import { useNavigate } from 'react-router-dom';

export function Home() {

  const navigation = useNavigate();

  const navigateToContact = () => {
    navigation('/message/massText');
  }

  const navigateToImage = () => {
    navigation('/message/massImage');
  }

  return (
    <>
      <Header />
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex flex-col">
          <button onClick={navigateToImage} className="btn btn-sm mb-10">
            ENVIAR COM IMAGENS
          </button>
          
          <button onClick={navigateToContact} className="btn btn-sm">
            ENVIAR APENAS TEXTO
          </button>
        </div>
      </div>
    </>
  );
}