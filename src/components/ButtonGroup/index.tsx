import React from 'react';

type Props = {
  setIsGroup: React.Dispatch<React.SetStateAction<boolean>>
  isGroupProps?: boolean;
}

export function ButtonGroup({ setIsGroup, isGroupProps }: Props) {

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

  return (
    <div
      key={5}
      className='text-gray-300 flex flex-col font-medium'>
      {listButtons.map((index, i) =>
        <div className='flex flex-row mt-4 lg:mt-0 justify-around md:justify-center'>
          <h1 className='mr-8 w-48'>{index.descriptionButton}</h1>
          <button className='right-0'
            key={index.id}
            onClick={() => setIsGroup(index.isGroup)}
          >
            <div className='flex items-center justify-center border-2 border-gray-300 w-[20px] h-[20px] rounded-[10px]'>
              {
                isGroupProps === index.isGroup && (
                  <div className='w-[10px] h-[10px] rounded-[5px] bg-[#00CED1]' />
                )
              }
            </div>
          </button>
        </div>
      )}
    </div>
  );
}