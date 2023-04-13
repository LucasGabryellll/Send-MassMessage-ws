import React, { useState } from 'react';

import api from '../../services/api';

import { Header } from '../../components/Nav';

import changeImage from '../../assets/replace.png';
import { Form } from '../../components/Form';
import { Footer } from '../../components/Footer';

export function SendImage() {
  const [message, setMessage] = useState("");
  const [interval, setInterval] = useState(0);
  const [isGroup, setIsGroup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUpload, setFileUpload] = useState<any>([]);
  const [preview, setPreview] = useState<any>(changeImage);
  const [filterGroup, setFilterGroup] = useState("");
  
  let formData = new FormData();

  formData?.append("file", fileUpload);

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
        isGroup,
        filterGroup: filterGroup.toLocaleUpperCase(),
      });

      setIsLoading(false);

      setMessage("");
      setInterval(0);
      setIsLoading(false);
      setFileUpload([]);

      alert("Mensagens enviadas com sucesso");

    } catch (error) {
      setMessage("");
      setInterval(0);
      setIsLoading(false);
      setFileUpload([]);
      alert("Error interno no Servidor!");

      return () => {}

    }
  }

  const imgPreviewConvert = (e: any) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader?.readyState === 2) {
        setPreview(reader?.result);
      }
    }

    reader.readAsDataURL(e?.target?.files?.[0])
  }

  const removeUplod = () => {
    if (preview === changeImage) {
      return false;
    } else {
      setFileUpload([]);
      setPreview(changeImage);
    }
  }

  return (
    <>
      <Header />

      <Form
        handleStart={handleStart}
        interval={interval}
        isGroup={isGroup}
        isLoading={isLoading}
        message={message}
        setInterval={setInterval}
        setIsGroup={setIsGroup}
        setMessage={setMessage}
        setFilter={setFilterGroup}
        filter={filterGroup}
      >
        <div className='flex flex-col xl:flex-row items-center xl:justify-between mb-10'>
          <div className='flex flex-rows w-full items-end'>
            <div className='flex relative w-[100%] h-36'>
              <img
                className='absolute w-36 h-36 border-[2px] border-cyan-500 rounded-[15px] shadow-lg shadow-black'
                src={preview}
                alt="Preview" />
            </div>

            {fileUpload.length !== 0 &&
              <div
                onClick={removeUplod}
                className='text-red-600 cursor-pointer font-bold sm:ml-[-70%] md:ml-[-60%] lg:ml-[-40%]'
              >
                Remover
              </div>
            }
          </div>

          <div className='flex flex-col text-white mb-2 mt-5 md:[mb-6, mt-0] w-[100%]'>
            <label >Escolha uma imagem para enviar</label>
            <input
              className='text-cyan-500 md:w-full mt-2'
              type="file"
              id="avatar"
              name="avatar"
              accept="image/png, image/jpeg"

              onChange={(e) => {
                setFileUpload(e?.target?.files?.[0])
                imgPreviewConvert(e)
              }}
            >
            </input>
          </div>
        </div>
      </Form>

      <Footer/>
    </>
  );
}