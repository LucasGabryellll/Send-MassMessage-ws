import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import logo from "../../assets/NZBX.png";

export function Header() {
  const navigation = useNavigate();

  const handleLogo = () => {
    navigation("/");
  }

  return (
    <nav className='flex items-center bg-black h-20 mb-5'>
      <div className='w-[10%] ml-2 mr-2 md:ml-[10%] md:mr-[10%]'>
        <img
          className='h-8 md:h-14 cursor-pointer'
          alt='Logo'
          src={logo}
          onClick={handleLogo}
        />
      </div>
      <div className="flex md:w-[90%] text-[12px] md:text-[18px] gap-[18px] md:gap-24 text-white">
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