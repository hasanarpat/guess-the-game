import Link from 'next/link';

import { GiConsoleController } from 'react-icons/gi';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaSearch } from 'react-icons/fa';
import { IoMdInfinite } from 'react-icons/io';
import { GrRun } from 'react-icons/gr';

export const GameButton = (props) => {
  let modeColor;
  let bgColor;
  let icon;
  switch (props.mode) {
    case 'Kolay':
      modeColor = 'bg-green-700';
      break;
    case 'Yarım':
      modeColor = 'bg-lime-400';
      break;
    case 'Zor':
      modeColor = 'bg-red-700';
      break;
    default:
      modeColor = 'bg-gray-500';
      break;
  }

  switch (props.title) {
    case 'Klasik':
      icon = <GiConsoleController className='inline text-3xl' />;
      break;
    case 'Sanat':
      icon = <IoColorPaletteOutline className='inline text-3xl' />;
      break;
    case 'Anahtar Kelimeler':
      icon = <GiArchiveResearch className='inline text-3xl' />;
      break;
    case 'Tahmin et':
      icon = <FaSearch className='inline text-3xl' />;
      break;
    case 'Unlimited':
      icon = <IoMdInfinite className='inline text-3xl' />;
      break;
    case 'Sonsuz Bilmece':
      icon = (
        <span className='inline'>
          <IoMdInfinite className='inline text-3xl mr-2' />
          <FaSearch className='inline text-3xl' />
        </span>
      );
      break;
    case 'Hızlı Koşu Oyunları Haftası':
      icon = <GrRun className='inline text-3xl' />;
      break;
    default:
      break;
  }

  switch (props.background) {
    case 'game':
      bgColor = 'bg-blue-600';
      break;
    default:
      bgColor = 'bg-gray-500';
      break;
  }
  return (
    <button
      className={
        'w-full max-w-xs rounded-lg text-white hover:scale-125 border-2 border-black border-t-0 border-l border-r shadow-lg transition-all duration-300 ease-linear' +
        ' ' +
        bgColor
      }
    >
      <Link
        href={props.href}
        className='flex flex-col items-center justify-around w-full min-h-16 py-2 relative group'
      >
        <span className='text-xs'>
          {icon} {props.title}
        </span>
        {props.subtitle && <span className='text-xs'>{props.subtitle}</span>}
        <span className='text-xs max-w-[75%] font-mono'>
          {props.description}
        </span>
        {props.mode && (
          <span
            className={
              'z-10 absolute -top-6 -right-3 text-white text-xs p-2 rounded-lg border-2 border-black border-l-0 border-t-0 group-hover:hidden' +
              ' ' +
              modeColor
            }
          >
            {props.mode}
          </span>
        )}
        {props.weekly === true && (
          <span className='absolute -top-6 left-0 bg-white text-black text-[8px] p-2 rounded-lg border-2 border-black border-l-0 border-t-0'>
            hafta # 52
          </span>
        )}
      </Link>
    </button>
  );
};
