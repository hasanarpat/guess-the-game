import { Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const press_start_2p = Press_Start_2P({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Gamuess',
  description: 'Guess the game!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={press_start_2p.className}
        style={{
          backgroundImage: "url('/assets/images/layout/bg-main.jpg')",
          backgroundSize: '100vw',
        }}
      >
        <div className='flex flex-col items-center min-h-screen'>
          <div className='min-h-screen w-full  bg-black bg-opacity-35'>
            <div className='w-full min-h-screen 2xl:max-w-[70%] mx-auto shadow-black/15 shadow-2xl'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
