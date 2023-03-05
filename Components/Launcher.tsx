import Layout from './Layout';
import { Network, Alchemy } from 'alchemy-sdk';
import { Card, Center, Container } from '@chakra-ui/react';

const Launcher = ({ nfts }) => {
  return (
    <Container>
      {nfts?.length
        ? nfts.map((nft) => (
            <Card>
              {nft.title}
              <Center>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<iframe
            id="game"
            style="border: 0; width: 35vh; height: 50vh"
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
          ))
        : 'nothing to launch'}
    </Container>
  );
};

export default Launcher;
