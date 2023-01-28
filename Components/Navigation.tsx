import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Container,
  Text,
  Grid,
  GridItem,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link';

// more details on this here https://docs.walletconnect.com/2.0/web3modal/react/components
import { Web3Button } from '@web3modal/react';
import { useWeb3AuthHook } from '../utils/web3AuthContext';
import { useAccount } from 'wagmi';

const Navigation = () => {
  const pages = [
    { href: '/', name: 'Home' },
    { href: '/ar-page', name: 'AR Page' },
    { href: '/account-info', name: 'Account Info' },
  ];
  const { address, isConnecting, isDisconnected } = useAccount();
  const { w3aAddress, web3authLogin, web3AuthLogout } = useWeb3AuthHook();
  return (
    <Grid templateColumns="repeat(1fr 3fr 1fr)" gap={2} p={5}>
      <GridItem>
        <Heading size="xl">AR Web3 Starter</Heading>
      </GridItem>

      <GridItem justifySelf="start">
        <Container>
          <Grid templateColumns="repeat(5, 1fr)" gap={2} pt={3}>
            {pages.map((page) => (
              <Link href={page.href}>
                <GridItem>
                  <Text as="i">{page.name}</Text>
                </GridItem>
              </Link>
            ))}
          </Grid>
        </Container>
      </GridItem>

      <GridItem justifySelf="end" colStart={5} p={2} gap={1}>
        {w3aAddress ? (
          <Button>Logout</Button>
        ) : (
          <>
            <Web3Button />
            {/* If we're logged in with wallet connect we don't want to show the Torus login button */}
            {address ? null : (
              <Button ml={1} mb={2} onClick={web3authLogin}>
                Web2 Sign-In
              </Button>
            )}
          </>
        )}
      </GridItem>
    </Grid>
  );
};

export default Navigation;
