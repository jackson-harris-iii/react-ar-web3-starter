import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../Components/Layout';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, goerli } from 'wagmi/chains';
import Script from 'next/script';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { useState, useEffect } from 'react';
import { firebaseApp } from '../utils/firebase';
import { doc, getFirestore } from 'firebase/firestore';

const App = ({ Component, pageProps }) => {
  const chains = [mainnet, polygon, goerli];

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    }),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      appName: 'web3Modal',
      chains,
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
    }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <meta name="application-name" content="Axion1 Demo" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Axion1 Demo" />
        <meta name="description" content="Best Axion1 Demo in the world" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/public/myne.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/public/myne.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/public/myne.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/public/myne.png" />

        {/* <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://yourdomain.com" />
        <meta name="twitter:title" content="Axion1 Demo" />
        <meta
          name="twitter:description"
          content="Best Axion1 Demo in the world"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@jacksonthedev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Axion1 Demo" />
        <meta
          property="og:description"
          content="Best Axion1 Demo in the world"
        />
        <meta property="og:site_name" content="Axion1 Demo" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />

        {/* <!-- apple splash screen images -->
          <!--
          <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
          <link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' />
          --> 
          */}

        {/* <!-- 8th Wall --> */}
        <meta name="8thwall:package" content="@8thwall.xrextras"></meta>
        <script defer src="//cdn.8thwall.com/web/iframe/iframe.js"></script>
        <script
          defer
          src="//cdn.8thwall.com/web/aframe/8frame-1.1.0.min.js"
        ></script>
        <script
          defer
          src="//cdn.8thwall.com/web/aframe/aframe-physics-system-4.0.1.min.js"
        ></script>

        {/* <!-- XR Extras - provides utilities like load screen, almost there, and error handling.
          See github.com/8thwall/web/tree/master/xrextras --> */}
        <script defer src="//cdn.8thwall.com/web/xrextras/xrextras.js"></script>

        {/* <!-- 8thWall Web - Replace the app key here with your own app key --> */}
        <script
          defer
          src="//apps.8thwall.com/xrweb?appKey=kBNWJKSJcgqo6oonGp9FRT2aY8SGJm5AkP2zG1PQlbAZH3QL9DqOIi4nXphv4E5CJqk9JC"
        ></script>

        <script defer src="arComponent.js"></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <Script></Script>
      <ChakraProvider>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} id="main" />
        </WagmiConfig>
      </ChakraProvider>
      <Web3Modal
        projectId={process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}
        ethereumClient={ethereumClient}
      />
    </>
  );
};

export default App;
