import React from 'react'

export default function Product() {
  return (
    <div className='container mt-1'>
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img
            className='rounded-t-lg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxgs0G2bD9vI6y9uYzqkYfayYokB9EGT0u_w&s'
          />
        </a>
        <div className='p-1 flex flex-col justify-start'>
          <p className='mb-3  font-normal text-gray-700'>description </p>
          <div className='text-orange'>
            <span>₫</span>
            <span>69.000</span>
            <span className='text-xs ml-2 bg-price'>-44%</span>
          </div>
          <div className='flex items-center gap-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='size-4 text-orange'
            >
              <path
                fillRule='evenodd'
                d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-xs text-center'>4.8</span>
          </div>
        </div>
      </div>
    </div>
  )
}
