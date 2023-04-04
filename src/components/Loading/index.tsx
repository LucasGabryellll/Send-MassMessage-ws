import React from 'react'

export function Loading() {

  return (
    <div
      className='flex justify-center items-center w-full h-full bg-transparent'
    >
      <p className='transition-all ease-linear font-bold'>Aguarde...</p>
      <div
        className='h-8 w-8 border-4 ml-4
      border-l-gray-100 border-l-gray-200
      border-l-gray-200 border-t-green-500
        animate-spin ease-linear rounded-full'
      />
    </div>
  );
}