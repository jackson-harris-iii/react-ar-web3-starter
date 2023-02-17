import {
  Button,
  Container,
  Grid,
  GridItem,
  Box,
  IconButton,
  Center,
  Flex,
  HStack,
  Modal,
  useDisclosure,
  ModalContent,
  ModalOverlay,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import { GrMapLocation, GrMoney } from 'react-icons/gr';
import { CgProfile } from 'react-icons/cg';
import { BsShop } from 'react-icons/bs';
import { MdOutlineLeaderboard } from 'react-icons/md';
import RtsView from '../Components/RtsView';
import { Web3Button } from '@web3modal/react';
import { useAccount } from 'wagmi';
import { useDocument } from 'react-firebase-hooks/firestore';
import {
  collection,
  CollectionReference,
  doc,
  DocumentData,
  getFirestore,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { firebaseApp } from '../utils/firebase';

const Axion = () => {
  const [earnedPoints, setEarnedPoints] = useState(0);
  const [seconds, setSeconds] = useState(15);
  const [isActive, setIsActive] = useState(false);
  const [gamerOver, setGameOver] = useState(false);
  const [playerPosition, setPlayerPosition] = useState(null);
  const [nearbyWayspots, setNearbyWayspots] = useState([]);
  const [worldHidden, setWorldHidden] = useState(null);
  const [userScoresRef, setUserScoresRef] =
    useState<CollectionReference<DocumentData>>();
  const [users, setUsers] = useState<CollectionReference<DocumentData>>();

  // Modal Handlers
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();
  const {
    isOpen: isOpenShop,
    onOpen: onOpenShop,
    onClose: onCloseShop,
  } = useDisclosure();
  const {
    isOpen: isOpenLeaderBoard,
    onOpen: onOpenLeaderBoard,
    onClose: onCloseLeaderBoard,
  } = useDisclosure();

  const { address, isConnecting, isDisconnected } = useAccount();

  useEffect(() => {
    const initDbRefs = async () => {
      let userScoresRef = collection(getFirestore(firebaseApp), 'userScores');
      setUserScoresRef(userScoresRef);
      let usersCol = collection(getFirestore(firebaseApp), 'users');
      setUsers(usersCol);
    };
    initDbRefs();
  }, []);

  const [value, loading, error] = useDocument(
    doc(getFirestore(firebaseApp), 'users', address),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  useEffect(() => {
    if (!value) {
      const userRef = doc(getFirestore(firebaseApp), 'users', address);
      setDoc(userRef, {
        wallet: address,
        coins: earnedPoints,
      });
    }
    console.log('value', value?.data());
  }, [value]);

  // init toasts
  const toast = useToast();

  const [loadingNearbyWayspots, setLoadingNearbyWayspots] = useState({
    lnwPayload: { loading: true },
  });

  const IFRAME_ID = 'my-iframe';

  const handleWayspots = (wayspots) => {
    const wayspotSet = new Set([...nearbyWayspots, ...wayspots]);

    // console.log('wayspotset', wayspotSet);

    const wayspotArray = Array.from(wayspotSet);
    setNearbyWayspots(wayspotArray);
  };

  // useEffect(() => {
  //   //@ts-ignore
  //   window.XRIFrame.registerXRIFrame(IFRAME_ID);
  //   return () => {
  //     //@ts-ignore
  //     window.XRIFrame.deregisterXRIFrame();
  //   };
  // }, []);

  // get player location from 8thWall
  useEffect(() => {
    //iFrame to React communication handler
    const pointsHandler = (points) => {
      let pts = Math.min(points * 10, 4500);
      // console.log('react coinPoints', points);
      setEarnedPoints(pts);
    };

    const gameStart = () => {
      console.log('GAME STARTED!');
      setIsActive(true);
    };

    // handle messages from 8thWall child iFrame
    window.addEventListener('message', (message) => {
      if (
        message.origin ==
          'https://jackson-default-spotxgames.dev.8thwall.app' ||
        'https://spotxgames.8thwall.app'
      ) {
        switch (message.data.name) {
          case 'playerPosition':
            setPlayerPosition({ ...message.data });
            break;
          case 'nearbyWayspots':
            handleWayspots(message.data.wayspots);
            break;
          case 'loadingNearbyWayspots':
            setLoadingNearbyWayspots({ ...message.data });
            break;
          case 'gameStart':
            gameStart();
            break;
          case 'coinPoints':
            pointsHandler(message.data.value);
          default:
            break;
        }
        // console.log(message.origin);
        // console.log(message.data);

        return; // Skip message in this event listener
      }

      // ...
    });

    //iFrame to React communication handler cleanup
    return () => {
      window.removeEventListener('points', pointsHandler);
      window.removeEventListener('gameStart', gameStart);
      window.removeEventListener('message', null);
    };
  }, []);

  useEffect(() => {
    console.log('tracking the game');

    const isIFrame = (input: HTMLElement | null): input is HTMLIFrameElement =>
      input !== null && input.tagName === 'IFRAME';

    let frame = document.getElementById('my-iframe');

    const endGame = async () => {
      // alert('game over!');
      const userRef = doc(getFirestore(firebaseApp), 'users', address);
      const currentCoints = value?.data().coins;
      if (earnedPoints + currentCoints > currentCoints)
        setDoc(userRef, {
          wallet: address,
          coins: earnedPoints + value?.data().coins,
        });

      toast({
        title: `Collection Complete!`,
        status: 'success',
        isClosable: true,
        description: `Nice Job! You earned ${earnedPoints}!`,
      });
      setGameOver(true);
      setIsActive(false);

      setTimeout(() => {
        if (isIFrame(frame) && frame.contentWindow) {
          frame.contentWindow.postMessage(
            { name: 'stopar', value: true },
            'https://spotxgames.8thwall.app'
          );
        }
      }, 3500);
    };

    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (isActive && seconds < 1) {
      endGame();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <>
      <Center>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe
            id="my-iframe"
            style="border: 0; width: 75vh; height: 90vh"
            allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;geolocation;"
            src="https://spotxgames.8thwall.app/sx-axion-sprint-1/">
            </iframe>`,
          }}
        ></div>
      </Center>

      <Box
        // bg={useColorModeValue('purple.500', 'purple.400')}
        px={3}
        py={2}
        boxShadow="inner"
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          mr={2}
          bg={useColorModeValue('blue.400', 'blue.400')}
        /> */}
          {isActive ? (
            <Grid justifyItems={'center'}>
              <GridItem>
                Time Remaining: {seconds}
                <br />
                Points: {earnedPoints}
              </GridItem>
            </Grid>
          ) : (
            <>
              <Button variant="outlined" onClick={onOpen}>
                <Icon as={GrMapLocation} sx={{ fontSize: '3em' }} />
              </Button>

              <Button variant="outlined" onClick={onOpenShop}>
                <Icon as={BsShop} sx={{ fontSize: '3em' }} />
              </Button>

              <Button variant="outlined" onClick={onOpenProfile}>
                <Icon as={CgProfile} sx={{ fontSize: '3em' }} />
              </Button>

              <Button variant="outlined" onClick={onOpenLeaderBoard}>
                <Icon as={MdOutlineLeaderboard} sx={{ fontSize: '3em' }} />
              </Button>

              <Flex alignItems={'center'}>
                <Web3Button />
              </Flex>
            </>
          )}
        </Flex>
      </Box>

      {/* MINI MAP MODAL */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <RtsView
            playerPosition={playerPosition}
            loadingNearbyWayspots={loadingNearbyWayspots?.lnwPayload}
            nearbyWayspots={nearbyWayspots}
          />
        </ModalContent>
      </Modal>
      {/* SHOP MODAL */}
      <Modal isOpen={isOpenShop} onClose={onCloseShop}>
        <ModalOverlay />
        <ModalContent>
          <Grid>
            <GridItem>
              <h2>Wares For Sale</h2>
              <span>
                <Icon as={GrMoney} /> {earnedPoints}
              </span>
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>

      {/* PROFILE MODAL */}

      <Modal isOpen={isOpenProfile} onClose={onCloseProfile}>
        <ModalOverlay />
        <ModalContent>
          <Grid>
            <GridItem>
              <h4>Your Items</h4>
            </GridItem>

            <GridItem>
              <h4>Your Wallet Adddress</h4>
            </GridItem>

            <GridItem>
              <h4>Trading Post Profile</h4>
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>
      {/* LEADERBOARD MODAL */}

      <Modal isOpen={isOpenProfile} onClose={onCloseProfile}>
        <ModalOverlay />
        <ModalContent>
          <Grid>
            <GridItem>
              <h4>Scores</h4>
            </GridItem>
          </Grid>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Axion;
