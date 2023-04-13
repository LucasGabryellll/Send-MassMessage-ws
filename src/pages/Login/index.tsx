import React, { useState, useContext, KeyboardEvent } from "react";

import { useNavigate } from 'react-router-dom';

import userIcon from "../../assets/user.png";
import passwordIcon from "../../assets/padlock.png";
import eyeIcon from "../../assets/eye.png";
import logo from "../../assets/NZBX.png";

import { AuthContext } from "../../context/auth";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toogleEye, setToogleEye] = useState(false);

  const userContext = useContext(AuthContext);

  const navigation = useNavigate();

  const handleLogin = () => {
    try {
      userContext?.singInContext(username, password);

      navigation("/");
    } catch (error) {
      setPassword("");
    }
  }

  const handleToogleEye = () => {
    toogleEye ? setToogleEye(false) : setToogleEye(true);
  }

  return (
    <div
      className="flex items-center justify-center h-screen w-full
    bg-gradient-to-br from-slate-100 from-5% 
    via-sky-500 via-30% to-gray-900 to-90%
    ">
      <div
        className="flex flex-col items-center bg-stone-50 h-[50%] w-[90%] 
      md:w-[40%] lg:h-[70%] lg:w-[30%] 2xl:h-[60%] 2xl:w-[22%]
      rounded-lg border-[2px] border-cyan-500
      shadow-lg shadow-primary text-slate-600 font-bold relative"
      >
        <img
          className="h-12 lg:h-[20%] mt-3 mb-4"
          src={logo}
          alt="Logo"
        />

        <div className="mb-6">
          <p>Usuário:</p>

          <div className="flex flex-row items-center border-2 pl-2">
            <img
              className="h-5"
              src={userIcon}
              alt="userIcont"
            />

            <input
              className='text-black h-10 w-[72%] pl-4 outline-none'
              type="text"
              placeholder="Digite seu usuario..."
              value={username}
              onChange={(e) => setUsername(e?.target?.value)}
            />
          </div>
        </div>

        <div className="">
          <p>Senha:</p>

          <div className=" relative flex flex-row items-center border-2 pl-2">
            <img
              className="h-5"
              src={passwordIcon}
              alt="userIcont"
            />

            <input
              className='text-black w-[72%] h-10 pl-4 outline-none'
              type={!toogleEye ? "password" : "text"}
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e?.target?.value)}
              onKeyDown={(e: KeyboardEvent) => e.key === "Enter" ? handleLogin() : () => {}}
            />

            <img
              className="absolute h-6 mr-3 right-0 cursor-pointer"
              onClick={handleToogleEye}
              src={eyeIcon}
              alt="userIcont"
            />
          </div>
        </div>

        <button
          className='btn btn-lg rounded-[10px] pl-20 pr-20 mt-[20%] md:mt-10 mb-2'
          onClick={handleLogin}
          onKeyUpCapture={(e: KeyboardEvent) => { console.log(e.key) }}
        >
          ENTRAR
        </button>
      </div>
    </div>
  );
}