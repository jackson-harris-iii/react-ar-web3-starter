import Layout from './Layout';
import { Network, Alchemy } from 'alchemy-sdk';
import { Card, Center, Container } from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const Launcher = ({ nfts }) => {
  return (
    <Container>
      {nfts?.length
        ? nfts.map((nft) => {
            if (
              nft?.rawMetadata?.attributes &&
              nft.rawMetadata.attributes[0].value === 'unity' &&
              nft.rawMetadata.build_files
            ) {
              console.log('unity things', nft.rawMetadata);
              const { unityProvider } = useUnityContext({
                loaderUrl: `https://nftstorage.link/ipfs/${nft.rawMetadata?.build_files?.loaderUrl.replace(
                  'ipfs://',
                  ''
                )}`,
                dataUrl: `https://nftstorage.link/ipfs/${nft.rawMetadata?.build_files?.dataUrl.replace(
                  'ipfs://',
                  ''
                )}`,
                frameworkUrl: `https://nftstorage.link/ipfs/${nft.rawMetadata?.build_files?.frameworkUrl.replace(
                  'ipfs://',
                  ''
                )}`,
                codeUrl: `https://nftstorage.link/ipfs/${nft.rawMetadata?.build_files?.codeUrl.replace(
                  'ipfs://',
                  ''
                )}`,
              });
              return (
                <>
                  <h1>unity app</h1>
                  {unityProvider ? (
                    <Center>
                      <div style={{ width: '500', height: '281px' }}>
                        <Unity
                          style={{ width: '100%', height: '100%' }}
                          unityProvider={unityProvider}
                        />
                      </div>
                    </Center>
                  ) : null}
                </>
              );
            } else {
              return (
                <Card>
                  {nft.title}
                  <Center>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<iframe
            id="game"
            style="border: 0; width: 35vh; height: 75vh"
            allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;geolocation;"
            src="https://nftstorage.link/ipfs/${nft.rawMetadata.animation_url.replace(
              'ipfs://',
              ''
            )}">
            </iframe>`,
                      }}
                    ></div>
                  </Center>
                </Card>
              );
            }
          })
        : 'nothing to launch'}
      <Web3Button />
    </Container>
  );
};

export default Launcher;
