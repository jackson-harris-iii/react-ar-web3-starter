import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Layout from '../Components/Layout';
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <!-- 8th Wall --> */}
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
          src="//apps.8thwall.com/xrweb?appKey=tirdbaDAooelYE6JwxlonnWJVjB4FThiStxs9Mxys7CRa6pXeCfN8DLRBnZ6I8UorzQ7u5"
        ></script>

        <script defer src="arComponents.js"></script>
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default App;
