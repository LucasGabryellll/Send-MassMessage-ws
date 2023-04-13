import React, { useContext } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import logo from "../../assets/NZBX.png";
import logout from "../../assets/logout.png";

import { AuthContext } from "../../context/auth";

export function Header() {
  const userContext = useContext(AuthContext);
  
  const navigation = useNavigate();

  const handleLogo = () => {
    navigation("/");
  }

  const handleLogout = () => {
    userContext?.logout();
    window.location.reload();

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
      <div className="flex md:w-[90%] text-[12px] md:text-[18px] gap-[18px] md:gap-24 text-white items-center">
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

      <img
        className='ml-[10%] xl:absolute xl:right-[15%] h-4 w-4 md:h-8 md:w-8 cursor-pointer'
        alt='Icon logout'
        src={logout}
        onClick={handleLogout}
      />
    </nav>
  );
}