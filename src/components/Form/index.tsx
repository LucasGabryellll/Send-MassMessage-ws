import React from "react";

import { InputInterval } from "../InputInterval";
import { ButtonGroup } from "../ButtonGroup";
import { ButtonSubmit } from "../ButtonSubmit";

type Props = {
  setData?: React.Dispatch<React.SetStateAction<boolean>>,
  data?: boolean,
  message: string,
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  interval: number,
  setInterval: React.Dispatch<React.SetStateAction<number>>,
  setIsGroup: React.Dispatch<React.SetStateAction<boolean>>,
  isGroup: boolean,
  handleStart: () => {},
  isLoading: boolean,
  children?: React.ReactNode
}

export function Form({
  setData,
  data,
  message,
  setMessage,
  interval,
  setInterval,
  setIsGroup,
  isGroup,
  handleStart,
  isLoading,
  children
}: Props) {

  return (
    <div className='relative flex justify-center flex-col items-center'>
      <div className='absolute ml-[50%] mt-[-28%]'>
        
      </div>
      <h1 className='text-transparent 
        bg-clip-text bg-gradient-to-r
      from-purple-400 to-cyan-400 mb-4
      md:mb-10 text-[20px] md:text-[1.6em] 
      md:font-extrabold '>CONFIGURE SUA MENSAGEM</h1>

      <div
        className='flex flex-col 
          bg-slate-700 p-10 rounded-xl 
          shadow-lg shadow-black
          md:w-[60%]
          lg:w-[50%]
          w-[90%]'
        key={1}
      >
        {children}
        <p>MENSAGEM A SER ENVIADA:</p>
        <textarea
          key={2}
          className='text-zinc-600 pl-5 pr-2 border-2 shadow-lg shadow-black rounded-md rows'
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >

        </textarea>

        <div 
        className='mt-12 flex flex-col 
        lg:flex-row
        flex-1 justify-between'>
          <InputInterval intevalSelected={interval} setInterval={setInterval} />

          <ButtonGroup
            setIsGroup={setIsGroup}
            isGroupProps={isGroup}
          />
        </div>

        <ButtonSubmit
          interval={interval}
          message={message}
          onPress={handleStart}
          isLoading={isLoading}
        />
      </div>
    </div>
  );

}