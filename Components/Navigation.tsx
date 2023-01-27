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

const Navigation = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} p={5}>
      <GridItem>
        <Heading size="xl">AR Web3 Starter</Heading>
      </GridItem>

      <GridItem justifySelf="start">
        <Container>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} pt={3}>
            <Link href="/">
              <GridItem>
                <Text as="i">Home</Text>
              </GridItem>
            </Link>
            <GridItem>
              <Link href="/ar-page">
                <Text as="i">AR Page</Text>
              </Link>
            </GridItem>
          </Grid>
        </Container>
      </GridItem>

      <GridItem justifySelf="end" colStart={5}>
        <Button>Connect Wallet</Button>
      </GridItem>
    </Grid>
  );
};

export default Navigation;
