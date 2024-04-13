'use client';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className='p-4  mx-auto w-full lg:w-2/3 h-16 mb-5'>
      <section className='flex items-center justify-between w-full'>
        <div></div>
        <Link href='/' className=''>
          <h1 className='bg-gradient-to-b from-orange-400 via-orange-600 to-orange-900 text-3xl uppercase inline-block text-transparent bg-clip-text hover:to-orange-400 hover:via-orange-400 drop-shadow-[0_3px_3px_rgba(0,0,0,1)]'>
            Gamuess
          </h1>
        </Link>
        <div
          className='text-white text-lg hover:text-orange-400 cursor-pointer'
          onClick={() => setOpenMenu(true)}
        >
          <GiHamburgerMenu />
        </div>
        {openMenu && (
          <div className='absolute w-screen h-screen bg-opacity-50 bg-black top-0 left-0 z-50 flex items-center justify-center'>
            <div className='max-w-xl w-full min-h-64 bg-blue-800 flex flex-col items-center justify-center gap-px px-4 py-4 relative'>
              <details className='w-full bg-purple-900 rounded-md rounded-b-none p-2 cursor-pointer text-orange-400'>
                <summary>Merhaba</summary>
                <div className=''>Şimdi görüyorsun</div>
              </details>
              <details className='w-full bg-purple-900 p-2 cursor-pointer text-orange-400'>
                <summary>Merhaba</summary>
                <div className=''>Şimdi görüyorsun</div>
              </details>
              <details className='w-full bg-purple-900 p-2 cursor-pointer text-orange-400'>
                <summary>Merhaba</summary>
                <div className=''>Şimdi görüyorsun</div>
              </details>
              <details className='w-full bg-purple-900 p-2 cursor-pointer text-orange-400'>
                <summary>Merhaba</summary>
                <div className=''>Şimdi görüyorsun</div>
              </details>
              <details className='w-full bg-purple-900 rounded-md rounded-t-none p-2 cursor-pointer text-orange-400'>
                <summary>Merhaba</summary>
                <div className=''>Şimdi görüyorsun</div>
              </details>
              <div
                className='absolute -top-4 -right-4 bg-red-500 p-1 px-2 rounded hover:text-white cursor-pointer'
                onClick={() => setOpenMenu(false)}
              >
                x
              </div>
            </div>
          </div>
        )}
      </section>
    </nav>
  );
};
