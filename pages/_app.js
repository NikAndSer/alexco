import 'styles/scss/global.scss' // Global styles
import 'styles/globals.scss' // Global styles
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react';
import { Ruslan_Display, Inter } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';

export const textFont = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-textFont',
})

export const titleFont = Ruslan_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-titleFont',
})

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Load Bootstrap JavaScript
    typeof document !== 'undefined' ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
