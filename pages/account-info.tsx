import Layout from '../Components/Layout';
import { useAccount, useBalance } from 'wagmi';
import { Spinner } from '@chakra-ui/react';
import { useEffect } from 'react';

const AccountInfo = () => {
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address,
  });

  if (isConnecting || isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (address) {
    return <Layout>Hola {address} !</Layout>;
  }

  if (isDisconnected) {
    return <Layout>Connect or create a wallet to get started</Layout>;
  }
};

export default AccountInfo;
