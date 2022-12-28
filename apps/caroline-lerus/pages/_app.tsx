import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {' '}
      <Head>
        <title>Welcome to caroline-lerus!</title>
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <main className="app">
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
