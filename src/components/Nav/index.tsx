import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className='flex bg-black h-20 mb-5 flex-1'>
      <div className="container flex items-center gap-24 justify-center text-white">
        <Link
          className='hover:text-[#00FFFF] transition-all'
          to={'/'}>HOME</Link>

        <Link
          className='hover:text-[#00FFFF] transition-all'
          to={'/message/massImage'}>ENVIAR COM IMAGENS</Link>

        <Link
          className='hover:text-[#00FFFF] transition-all'
          to={'/message/massText'}>ENVIAR APENAS TEXTO</Link>
      </div>
    </nav>
  );
}