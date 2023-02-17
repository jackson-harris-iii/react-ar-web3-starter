import Navigation from './Navigation';
import { Box, Container } from '@chakra-ui/react';
import { useAccount } from 'wagmi';
import { doc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import { firebaseApp } from '../utils/firebase';

const Layout = ({ children }) => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [user, setUser] = useState(null);

  useEffect(() => {}, [user]);

  if (user !== null) {
    const [value, loading, error] = useDocument(
      doc(getFirestore(firebaseApp), 'users', address),
      {
        snapshotListenOptions: { includeMetadataChanges: true },
      }
    );
  }
  return (
    <>
      <Box m={3}>{children}</Box>
      <Navigation />
    </>
  );
};

export default Layout;
