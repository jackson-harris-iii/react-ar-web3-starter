import Layout from '../Components/Layout';
import Axion from '../Components/Axion';
import { useAccount } from 'wagmi'
import { Container, Spinner, Box, Grid, GridItem } from '@chakra-ui/react';
import { useWeb3AuthHook } from '../utils/web3AuthContext';
import { use, useEffect } from 'react';

const Homepage = () => {

  //hook to access wallet connect user address
  const { address, isConnecting, isDisconnected } = useAccount()
  

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
    return <Axion />
  }
  
  if (isDisconnected) {
    return (
    <Layout>
      <Container mt={5}>
        Connect or create a wallet to get started 
      </Container>
    </Layout>
    )    
  }

};

export default Homepage;
