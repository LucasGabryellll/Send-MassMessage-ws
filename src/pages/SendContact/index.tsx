import React, { useState } from 'react';

import api from '../../service/api';

import { Header } from '../../components/Nav';

import { ButtonGroup } from "../../components/ButtonGroup";
import { Loading } from '../../components/Loading';
import { MuiAlert } from '../../components/MuiAlert';

export function SendContact() {

  const [message, setMessage] = useState("");
  const [interval, setInterval] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);

  const handleStart = async () => {

    validadeInput();

    try {
      setIsLoading(true);

      const { data } = await api.post('/message/massText', {
        message: message,
        interval: interval,
        isGroup: isGroup
      });

      setIsLoading(false);
      setData(true);

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  const listButtons = [
    {
      id: 1,
      descriptionButton: "Enviar para Grupos",
      isGroup: true
    },
    {
      id: 2,
      descriptionButton: "Enviar para Contatos",
      isGroup: false
    }
  ]
  
  const validadeInput = () => {
    if (message === "") {
      alert("Campo De mensagem é obritório")
    }

    if(interval === 0 || interval < 0 ) {
      alert("Intervalo de envio inválido! Aplique um valor Maior que 0");
    }


  }

  return (
    <>
      <Header />

      <div className='relative flex justify-center flex-col items-center pl-25'>
        <div className='absolute ml-[50%] mt-[-28%]'>
          <MuiAlert
            descriptionAlert='MENSAGENS ENVIADAS COM SUCESSO'
            setData={setData}
            data={data}
          />
        </div>
        <h1 className='font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r text-3xl
      from-purple-400 to-cyan-400 mb-10'>CONFIGURE SUA MENSAGEM</h1>

        <div className='flex flex-col' key={1}>
          <textarea
            key={2}
            className='text-zinc-600 pl-5 pr-2 border-2'
            rows={10}
            cols={60}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          >

          </textarea>

          <div className='mt-12 flex flex-row flex-1 justify-between'>
            <div className=''>
              <p className='font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r
        from-emerald-700 to-cyan-400'>Intervalo de envio:</p>
              <input
                key={3}
                className='text-black border-2'
                type={'number'}
                value={interval}
                onChange={(e) => setInterval(Number(e.target.value))}
              />
            </div>

            <ButtonGroup
              buttons={listButtons}
              setIsGroup={setIsGroup}
              isGroupProps={isGroup}
            />
          </div>
        </div>

        <button
          onClick={handleStart}
          type="submit"
          className='btn btn-lg pl-20 pr-20 mt-12'
          disabled={isLoading}
        >
          {isLoading ? <Loading /> : "INICIAR"}
        </button>
      </div>
    </>
  );
}