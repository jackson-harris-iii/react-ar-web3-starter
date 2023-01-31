import Layout from '../Components/Layout';
import { useAccount } from 'wagmi'
import { Container, Spinner, Box, Grid, GridItem } from '@chakra-ui/react';
import { useWeb3AuthHook } from '../utils/web3AuthContext';
import { use, useEffect } from 'react';

const Homepage = () => {

  //hook to access wallet connect user address
  const { address, isConnecting, isDisconnected } = useAccount()
  
  //hook to access web3auth user address
  const { w3aAddress, w3aUserInfo, w3aAuthenticatedUser  } = useWeb3AuthHook()

  //force update and do cool things when we have an address
  useEffect(() => {

  },[address, w3aAddress])

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

  if (address || w3aAddress) {
    return <Layout>Hola {address || w3aAddress} !</Layout>  
  }
  
  if (isDisconnected || !w3aAddress) {
    return (
    <Layout>
      <Container mt={5}>
        This is a VPS world tour DEMO now...Connect or create a wallet to get started 
      </Container>
    </Layout>
    )    
  }

};

export default Homepage;
