import { GameButton } from '@/components/shared/game-button';
import { FaCalendarDay } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdInfinite } from 'react-icons/io';
export default function Home() {
  return (
    <main className='w-full h-full'>
      <section className='flex flex-wrap items-center justify-center gap-6 w-[80%] mx-auto md:w-full'>
        <div className='h-[580px] min-w-[300px] xl:min-w-[360px] bg-gray-300/30 rounded-2xl shadow-[0_10px_100px_rgba(0,0,0,.7)] relative pt-12 px-8 flex flex-col gap-10'>
          <div className='absolute -top-3 left-0 right-0 w-[90%] mx-auto text-lg text-black bg-white rounded-xl flex items-center gap-2 p-2 py-0'>
            <span className='w-full py-1 text-justify px-2 text-[17px]'>
              <FaCalendarDay className='inline mr-1 text-xl' />
              Günlük modlar
            </span>
          </div>
          <GameButton
            href='/clasic'
            title='Klasik'
            subtitle=''
            description='Oyunu kapağından bil'
            mode='Kolay'
            background='game'
          />
          <GameButton
            href='/artwork'
            title='Sanat'
            subtitle=''
            description='Oyunu çiziminden bil'
            mode='Yarım'
            background='game'
          />
          <GameButton
            href='/keywords'
            title='Anahtar Kelimeler'
            subtitle='(english)'
            description='Oyunu anahtar kelimelerle tahmin et'
            mode='Yarım'
            background='game'
          />
          <GameButton
            href='/guess'
            title='Tahmin et'
            subtitle=''
            description='Oyunu özelliklerinden bil'
            mode='Zor'
            background='game'
          />
          <GameButton
            href='/'
            title='Karakterler (devam etmekte)'
            subtitle=''
            description='Oyunu kapağından bil'
          />
        </div>
        <div className='h-[580px] min-w-[300px] xl:min-w-[360px] bg-gray-300/30 rounded-2xl shadow-[0_10px_100px_rgba(0,0,0,.7)] relative pt-12 px-8 flex flex-col gap-10'>
          <div className='absolute -top-3 left-0 right-0 w-[90%] mx-auto text-lg text-black bg-white rounded-xl flex items-center gap-2 p-2 py-0'>
            <span className='w-full py-1 text-justify px-2 text-[17px]'>
              <IoMdInfinite className='inline mr-1 text-xl' />
              Sonsuz modlar
            </span>
          </div>
          <GameButton
            href='/unlimited'
            title='Unlimited'
            subtitle=''
            description='Oyunu bitmeyen kapaklarından bil'
            mode='Zor'
            background='game'
          />
          <GameButton
            href='/guess-unlimited'
            title='Sonsuz Bilmece'
            subtitle=''
            description='özellikleriyle durmadan oyun tahmini yap'
            mode='Zor'
            background='game'
          />
        </div>
        <div className='h-[580px] min-w-[300px] xl:min-w-[360px] bg-gray-300/30 rounded-2xl shadow-[0_10px_100px_rgba(0,0,0,.7)] relative pt-12 px-8 flex flex-col gap-10'>
          <div className='absolute -top-3 left-0 right-0 w-[90%] mx-auto text-lg text-black bg-white rounded-xl flex items-center gap-2 p-2 py-0'>
            <span className='w-full py-1 text-justify px-2 text-[17px]'>
              <FaCalendarAlt className='inline mr-1 text-xl' />
              Haftalık modlar
            </span>
          </div>
          <GameButton
            href='/unlimited-weekly'
            title='Hızlı Koşu Oyunları Haftası'
            subtitle=''
            description=''
            mode='Kolay'
            background='game'
          />
        </div>
      </section>
    </main>
  );
}
