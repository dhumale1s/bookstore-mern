import React from 'react';

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-92 h-[460px] shadow-xl hover:scale-105 transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border flex flex-col">
        <figure className="flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-60 object-cover"
          />
        </figure>
        <div className="card-body flex flex-col flex-grow p-4">
          <h2 className="card-title flex items-center justify-between text-lg font-semibold">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.title}</p>
          <div className="card-actions mt-auto flex justify-between items-center">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-2 hover:bg-pink-500 hover:text-white transition-colors duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;


/*
import React from 'react'

function Cards({item}) {
  return (
    <>
    <div className='mt-4 my-3 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white px-2 duraton-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
*/