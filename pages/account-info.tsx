import Layout from '../Components/Layout';
import { useAccount, useBalance } from 'wagmi';
import { Container, Grid, GridItem, Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';

const AccountInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
  });

  if (isConnecting || isLoading) {
    return (
      <Container mt={8}>
        <Grid justifyItems={'center'}>
          <GridItem>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </GridItem>
        </Grid>
      </Container>
    );
  }

  if (address) {
    return <Layout>Account info page {address} !</Layout>;
  }

  if (isDisconnected) {
    return <Layout>Connect or create a wallet to get started</Layout>;
  }
};

export default AccountInfo;
