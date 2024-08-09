import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from "react-router-dom"
import axios from "axios"

function Course() {

    const[book,setBook]=useState([])
    useEffect(()=>{
        const getBook=async()=>{
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data)
                setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        };
        getBook();
    },[]);

    return (
        <>
            <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col my-10">
            {/*<div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>*/}
            <div className='mt-20 items-center justify-center text-center'>
                {/*<div className='mt-28 items-center justify-center text-center'>*/}
                    <h1 className='text-2xl md:text-4xl'>
                        We're delighted to have you <span className='text-pink-500'>here! :)</span>
                    </h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Link to="/">
                        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duratioon-300'>
                            Back
                        </button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book.map((item) => (
                            <Cards key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course