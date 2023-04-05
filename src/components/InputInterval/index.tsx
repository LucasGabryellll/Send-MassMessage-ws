import React from "react";

import { selectItems } from '../../utils/itemsInterval';

type Props = {
  setInterval: React.Dispatch<React.SetStateAction<number>>
  intevalSelected: number;
}

export function InputInterval({ setInterval, intevalSelected }: Props) {

  return (
    <div>
      <p className='font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r
        from-emerald-700 to-cyan-400'>Intervalo de envio:</p>
      <div className="relative flex justify-between w-[100%] h-10 rounded-xl">
        <input
          key={3}
          className='text-black w-[100%] rounded-t-sm h-full pl-4 border-r-2'
          type={'number'}
          min="0"
          value={intevalSelected}
          onChange={(e) => setInterval(Number(e?.target?.value))}
        />

        {/*
          <div className="">
          <ul
            className="absolute bg-slate-400 rounded-xl right-0 mt-2 
            h-24 w-24 overflow-hidden overflow-y-scroll text-teal-950 hidden
          ">
            {selectItems.map((item) => (
              <li className="hover:bg-teal-900 font-bold">
                <button
                  className="w-full"
                  onClick={() => setInterval(item.value)}
                  >
                  {item.description}
                </button>
              </li>
            ))}
          </ul>
        </div>
          */}
      </div>
    </div>
  );
}