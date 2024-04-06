import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';
import { SlMustache } from 'react-icons/sl';

export const Footer = () => {
  return (
    <footer className='mx-auto w-full lg:w-2/3 mt-3'>
      <div className='w-full flex flex-col items-center justify-center gap-1 text-white'>
        <div className='flex items-center justify-center gap-4 text-4xl'>
          <MdOutlineFavoriteBorder className='hover:text-orange-400' />
          <RiTwitterLine className='hover:text-orange-400' />
          <SlMustache className='hover:text-orange-400' />
        </div>
        <div>
          <span className='font-mono text-xl'>Gamuess - 2024</span>
        </div>
      </div>
    </footer>
  );
};
