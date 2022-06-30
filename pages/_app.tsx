import '@/styles/globals.css';

import { AnimatePresence } from 'framer-motion';
import { AppProps } from 'next/app';
import { ParallaxProvider } from 'react-scroll-parallax';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </ParallaxProvider>
  );
}

export default MyApp;
