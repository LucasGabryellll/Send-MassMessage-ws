import React, { useState } from 'react';

type Props = {
  buttons: {
    id: number,
    descriptionButton: string,
    isGroup: boolean
  }[],

  setIsGroup: React.Dispatch<React.SetStateAction<boolean>>
  isGroupProps?: boolean;
}

export function ButtonGroup({ buttons, setIsGroup, isGroupProps }: Props) {

  return (
    <div
      key={5}
      className='text-black flex flex-col font-medium'>
      {buttons.map((index, i) =>
        <div className='flex flex-row'>
          <h1 className='mr-8 w-48'>{index.descriptionButton}</h1>
          <button className='right-0'
            key={index.id}
            onClick={() => setIsGroup(index.isGroup)}
          >
            <div className='flex items-center justify-center border-2 border-black w-[20px] h-[20px] rounded-[10px]'>
              {
                isGroupProps == index.isGroup && (
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