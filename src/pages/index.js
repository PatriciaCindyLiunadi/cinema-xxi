// import Hero from 'components/Hero';
import React from 'react';
import Link from 'next/link';


export default function Home({ movies }) {
  console.log(movies);
  return (
    <div className=' relative h-screen max-w-screen flex justify-center items-center opacity-85'>
        <img
        className='h-screen w-screen'
        src="/theMeg.jpg"
        />

        <div className='absolute left-0 top-1/2 transform -translate-y-2/4 h-full flex flex-col justify-center items-start p-14 '>
          <h1 className='text-6xl text-white font-bold mb-6'>Welcome To  
          <div className='md:flex items-center font-neue'>
            <span className="md:text-5xl ml-3 pl-6 pt-3">
                Cinema
                <span className="text-red-600">XXI</span>
            </span>
          </div>
          </h1>

          <div className='text-center mt-3'>
            
            {/* Button Regist */}
            <Link href="/register">
             <button className='bg-emerald-500 hover:bg-emerald-700 text-white text-lg font-bold py-2 px-6 rounded mb-2 ml-10 '>Register</button>
            </Link>

            {/* Button Login */}
            <Link href="/newlogin">
             <button className='bg-emerald-500 hover:bg-emerald-700 text-white text-lg font-bold py-2 px-6 rounded ml-6'>Login</button>
            </Link>
          </div>
        </div>
      </div>
    
    
  );
}
