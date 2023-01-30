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
  Spinner,
  Avatar,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
  Card,
} from '@chakra-ui/react';
import Link from 'next/link';

// more details on this here https://docs.walletconnect.com/2.0/web3modal/react/components
import { Web3Button } from '@web3modal/react';
import { useWeb3AuthHook } from '../utils/web3AuthContext';
import { useAccount } from 'wagmi';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useContext, useEffect } from 'react';

const Navigation = () => {
  const pages = [
    { href: '/', name: 'Home' },
    { href: '/ar-page', name: 'AR Page' },
    { href: '/account-info', name: 'Account Info' },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { address, isConnecting, isDisconnected } = useAccount();
  const {
    w3aAddress,
    web3authLogin,
    web3AuthLogout,
    web3authProvider,
    gettingAccount,
  } = useWeb3AuthHook();

  useEffect(() => {}, [web3authProvider]);

  return (
    <>
      <Box
        // bg={useColorModeValue('purple.500', 'purple.400')}
        px={3}
        py={2}
        boxShadow="xl"
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            mr={2}
            bg={useColorModeValue('blue.400', 'blue.400')}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading size="m">AR Web3 Starter</Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {pages.map((page, index) => (
                <Link href={page.href} key={index}>
                  <GridItem>
                    <Text as="i">{page.name}</Text>
                  </GridItem>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {w3aAddress ? (
              <Button onClick={web3AuthLogout}>Logout</Button>
            ) : (
              <>
                <Web3Button />
                {/* If we're logged in with wallet connect we don't want to show the Torus login button */}
                {address ? null : (
                  <Button ml={1} onClick={web3authLogin}>
                    Web2 Sign-In
                  </Button>
                )}
              </>
            )}
            {gettingAccount ? (
              <>
                <Spinner />
              </>
            ) : null}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {pages.map((page, index) => (
                <Link href={page.href} key={index}>
                  <GridItem>
                    <Text as="i">{page.name}</Text>
                  </GridItem>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navigation;
