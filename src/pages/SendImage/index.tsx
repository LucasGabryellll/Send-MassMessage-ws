import React, { useEffect, useState } from 'react';

import api from '../../service/api';

import { Header } from '../../components/Nav';
import { ButtonGroup } from '../../components/ButtonGroup';
import { Loading } from '../../components/Loading';

import logo from '../../assets/NZBX2.png';

export function SendImage() {
  const [message, setMessage] = useState("");
  const [interval, setInterval] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUpload, setFileUpload] = useState<any>([]);
  const [preview, setPreview] = useState<any>(null);

  let formData = new FormData();

  formData.append("file", fileUpload);

  const handleStart = async () => {
    try {
      setIsLoading(true);

      const { data } = await api.post('/upload', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });

      const file = data?.results;

      await api.post('/message/massImage', {
        message,
        interval,
        file,
        isGroup
      });

      setIsLoading(false);

      setMessage("");
      setInterval(0);
      setIsLoading(false);
      setFileUpload([]);

    } catch (error) {
      setMessage("");
      setInterval(0);
      setIsLoading(false);
      setFileUpload([]);
      alert("Error interno no Servidor!");
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

  useEffect(() => {
    const fileReader = new FileReader;

    //fileReader.readAsDataURL(fileUpload);

  }, [fileUpload]);

  return (
    <>
      <Header />

      <div className='relative flex justify-center flex-col items-center pl-25'>

        <h1 className='font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r text-3xl
      from-purple-400 to-cyan-400 mb-10'>CONFIGURE SUA MENSAGEM</h1>

        <div className='flex flex-col' key={1}>
          <div className='flex flex-row justify-center items-center justify-between mb-10'>
            <div className='flex relative w-[50%] h-36 rounded-[15px] mr-4 justify-center items-center'>
              <img
                className='absolute w-36 h-36 rounded-[50%] bg-slate-600'
                src={preview ? preview : ""}
                alt="Image" />
            </div>

            <div className='flex flex-col text-gray-800 mb-6'>
              <label >Escolha uma imagem para enviar</label>
              <input
                className='text-black'
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"

                onChange={(e) => setFileUpload(e?.target?.files?.[0])}
              >
              </input>
            </div>
          </div>

          <h1 className='text-black font-bold'>ENVIAR MENSAGEM JUNTO COM A IMAGEM</h1>
          <textarea
            key={2}
            className='text-zinc-600 pl-5 pr-2 border-2'
            rows={5}
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