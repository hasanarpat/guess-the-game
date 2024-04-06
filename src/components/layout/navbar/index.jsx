import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {
  return (
    <nav className='p-4  mx-auto w-full lg:w-2/3 h-16 mb-5'>
      <section className='flex items-center justify-between w-full'>
        <div></div>
        <div className=''>
          <h1 className='bg-gradient-to-b from-orange-400 via-orange-600 to-orange-900 text-3xl uppercase inline-block text-transparent bg-clip-text hover:to-orange-400 hover:via-orange-400 drop-shadow-[0_3px_3px_rgba(0,0,0,1)]'>
            Gamuess
          </h1>
        </div>
        <div className='text-white text-lg hover:text-orange-400 cursor-pointer'>
          <GiHamburgerMenu />
        </div>
      </section>
    </nav>
  );
};
