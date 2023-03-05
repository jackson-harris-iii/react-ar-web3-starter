import Layout from '../Components/Layout';
import Axion from '../Components/Axion';
import { useAccount } from 'wagmi'
import { Container, Spinner, Box, Grid, GridItem, Text, Center, Card, Image } from '@chakra-ui/react';
import { Web3Button } from '@web3modal/react';
import Launcher from '../Components/Launcher'
import { useEffect, useState } from 'react';
import { Network, Alchemy } from 'alchemy-sdk';

const Homepage = () => {

  //hook to access wallet connect user address
  const { address, isConnecting, isDisconnected } = useAccount()
  const [nfts, setNfts] = useState()

  const settings = {
    apiKey: 'rdgGoCUHn-B1Ps8l14VmuPcM3nutths8', // Replace with your Alchemy API Key.
    network: Network.ETH_GOERLI, // Replace with your network.
  };


  useEffect(() => {
    const getNfts = async () => {
      const alchemy = new Alchemy(settings);
      const nfts = await alchemy.nft.getNftsForOwner(address,{contractAddresses:['0x9e4d743b7ebf3be25ff997151b0260e2edc5902a']})
      // const nfts = await alchemy.getNftMetadata('')
      console.log('what are those???', nfts)
      setNfts(nfts.ownedNfts)
    };   
    getNfts()

  }, [address])
  

  if (isConnecting) {
    return ( 
    <Container fluid mt={8} >
      <Grid justifyItems={'center'}>
        <GridItem>
          <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
          />
        </GridItem>
      </Grid>  
  </Container>
  )}

  if (address) {
    return <Launcher nfts={nfts}/>
  }
  
  if (isDisconnected) {
    return (
    <Container mt={20}>
      <Center>
    
      <Card mt={5} p={10}>
        <Grid justifyContent={'center'}>
          <GridItem>
            <Center>
              <Text fontSize='5xl'>Welcome</Text>
            </Center>
          </GridItem>
          <Center>
            <Image
              borderRadius='full'
              boxSize='150px'
              src='./spotxgames-favicon.png'
              alt='Spotx Logo'
              mb={3}
            />
          </Center>
        <GridItem>
        Connect or create a wallet to get started 
        </GridItem>
        <GridItem alignItems={'Grid'} justifyContent={'center'} mt={5}>
          <Center>
          <Web3Button />
          </Center>
        </GridItem>
        </Grid>
      </Card>
      </Center>

    </Container>
    )    
  }

};

export default Homepage;
