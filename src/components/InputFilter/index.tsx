import React from "react";

type Props = {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export function InputFilter({ filter, setFilter }: Props) {
  return (
    <div className="2xl:ml-10">
      <p className='font-extrabold text-transparent 
        bg-clip-text bg-gradient-to-r
        from-emerald-700 to-cyan-400'>Filtro:</p>

        <input
          key={3}
          className='text-black w-[100%] rounded-t-sm h-10 pl-4 border-r-2'
          type={'text'}
          value={filter}
          onChange={(e) => setFilter(e?.target?.value)}
        />
  
    </div>
  );
}