import { Button, Container, Grid, GridItem, Box, IconButton,Center } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowBackIcon, Search } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { GrMapLocation } from 'react-icons/gr'
import RtsView from '../Components/RtsView'

const ArPage = () => {

  const [earnedPoints, setEarnedPoints] = useState(0)
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const [gamerOver, setGameOver] = useState(false)
  const [playerPosition, setPlayerPosition] = useState(null)
  const [nearbyWayspots, setNearbyWayspots] = useState([])
  // const [loadingNearbyWayspots, setLoadingNearbyWayspots] = useState({lnwPayload:{loading: false}})

  // SET BACK TO TRUE AND REENABLE VPS WATCHER IN APP.JS LN 97 TO STOP USING DUMMY DATA

  const dummyData = [
    {
        "id": "CDlL3rweJQiELt/yEIhs",
        "imageUrl": "https://lh3.googleusercontent.com/IvTgLOkgtOFAZX9jWZnkOJKo9M1eNMXQ-1bkCWDczA8j9KSxJL8Ep6Htu2YsvGiCXvacV-QEXr-UV01srqJrObeBlg",
        "title": "Slide Mantra",
        "lat": 25.774096,
        "lng": -80.186789
    },
    {
        "id": "73djqn9+tSZ3EXa/5EnN",
        "imageUrl": "https://lh3.googleusercontent.com/p3LRF8p6bH9gPGtF0SnrlsjfODCSB5QnV42oFACBsQCzqzqjXQzeubqsplglyOlvsakCkw9fE30RagdpEgQKClLbO9I",
        "title": "Mildred and Claude Pepper Fountain",
        "lat": 25.774435,
        "lng": -80.185479
    },
    {
        "id": "otWC+do5SDGLBA1IiTAg",
        "imageUrl": "https://lh3.googleusercontent.com/PUWl0Ofc6JDONQf2iJWnxMVv0JiW69Uqe90mnmTKN4za-w-hLsC8HEh9NayzG7A9FJeu7WLJb6OePOtaGTiSU1TxLdk",
        "title": "Miami's Oldest Banyan Tree",
        "lat": 25.778271,
        "lng": -80.187029
    },
    {
        "id": "MwouzfGSW3QrL1D+K90z",
        "imageUrl": "https://lh3.googleusercontent.com/NASP3UfqrfFVCk4VQFH1fw-F7H_V6cGGril9-JXuELwfiKFfYulY8r5d-J5L-UCu7TtmvG0GxcszSYX0OjEBIXQKRg",
        "title": "Educated Rhino",
        "lat": 25.803983,
        "lng": -80.190979
    },
    {
        "id": "TnITvjYwXHeUj/JCx3cy",
        "imageUrl": "https://lh3.googleusercontent.com/A5nl7cvDK8n-fqm37i6Q_3A7miDLhS8T8Adj-dvOigNUMkxj828l5ozEvqnyePPSbMquFHfaQXodDIk1JssCihOkprp3o3Ng7elJiD0",
        "title": "Panther Mural",
        "lat": 25.799199,
        "lng": -80.202635
    },
    {
        "id": "RYPT4nshgHjOMrg4JwC4",
        "imageUrl": "https://lh3.googleusercontent.com/NeLkwKi_SsPXkI42Qx0_v90KwVhSnHmIY0TuKzA8eb_ralRQ6pICEXRoOrHEAuTKr8Ov9EIDEkZcJY9HR44chqaECA",
        "title": "The Torch of Friendship",
        "lat": 25.777638,
        "lng": -80.187663
    },
    {
        "id": "n8s+KiDZl984u9Ztu26Z",
        "imageUrl": "https://lh3.googleusercontent.com/9eiyUMJmM8rXCOtG1xog00n4JKwO1mDTyqPFesrzCIfdvn0wyeFKeFDGhaOh5oUsNEhYKccsb20aO56tyPMXZYU6wA",
        "title": "Bacardi N Sun Tower South Faca",
        "lat": 25.797075,
        "lng": -80.189249
    },
    {
        "id": "/ZMG/JHFEk6wQfk64svJ",
        "imageUrl": "https://lh3.googleusercontent.com/R_TW77yMm3IkzdZ0gupLknR-2uyr_oY8_q3OOHiW2NoRTLL_T2SXD8z81dOjVYb3JbRkmWTIaimNXlq17362ZCj3-oXo",
        "title": "The Miami Woman's Club",
        "lat": 25.792043,
        "lng": -80.186899
    },
    {
        "id": "7RAB2689yr860k9c/O40",
        "imageUrl": "https://lh3.googleusercontent.com/ed3q8IK7GXjHFrGwRsag1aeS3GN1MPJYlF5MyaFM2czcNnXbPXiJDMID4tt3sOY8KDHlCKL90YqNjNsWYNLva0a7iU2t",
        "title": "Miami Public Art Chair",
        "lat": 25.794134,
        "lng": -80.185538
    },
    {
        "id": "yGGMwFLWdH9wH0mU11tU",
        "imageUrl": "https://lh3.googleusercontent.com/Qd4s68NlAjST4yfxsiCLWwgoqUHeTeTHv0c9vianJjS9ME_EP_EYnR6ZzhSBupVc7t0MT1t3Dv-oGHiGsPXowVczSkU",
        "title": "Margaret Pace Park",
        "lat": 25.793862,
        "lng": -80.18634
    },
    {
        "id": "ggbBUjmLt3qd8wHIyGcO",
        "imageUrl": "https://lh3.googleusercontent.com/5QHISaRoIhm6pkOz2tBiamrPv-0DDh3TNOWd2LLF-iXYwNq-ZvR8UFiB1MF3c5GWUXGj1udzv07AFzD7K9n4M7IUa48",
        "title": "Downtown Cubes",
        "lat": 25.78556,
        "lng": -80.186166
    },
    {
        "id": "wrI9F15oImfIOKLqAGsC",
        "imageUrl": "https://lh3.googleusercontent.com/nuqvNxfm44c_fV6tfSSVXU5EUcq432cPcEbR5GxacRSuIRtdLyz0EdcO2jYtiE9jNLZIPW9EIoPYAHTkbD-5yLxrEys",
        "title": "Christopher Columbus",
        "lat": 25.776325,
        "lng": -80.184925
    },
    {
        "id": "G7jRW4hVBQeW+Bc0cVlz",
        "imageUrl": "https://lh3.googleusercontent.com/M0AuDsPwYZkKUzK8MZd3bygPSgpi1NZahthlnm0EhsmmwgxNRlthQfzV6Wtvm5LRQe0gIWaE_y4-cfIGPlZdmACob_A",
        "title": "Lemur Lemur on the Wall",
        "lat": 25.788026,
        "lng": -80.194275
    }
]
  const [loadingNearbyWayspots, setLoadingNearbyWayspots] = useState({lnwPayload:{loading: true}})
  
  const IFRAME_ID = "my-iframe"
  // const location = {latitude: 38.8951, longitutde: '-77.0364,38.8951'}

  const handleWayspots = (wayspots) => {

  const wayspotSet = new Set([...nearbyWayspots, ...wayspots])

  console.log('wayspotset', wayspotSet)

  const wayspotArray = Array.from(wayspotSet)
    setNearbyWayspots(wayspotArray)
  }

  useEffect(() => {
    window.XRIFrame.registerXRIFrame(IFRAME_ID)
    return () => {
      window.XRIFrame.deregisterXRIFrame()
    }
  }, [])

  // get player location from 8thWall
  useEffect(() => {
    //iFrame to React communication handler
    const handler = (event) => {
      let pts = Math.min(event.detail.coinPoints * 100, 4500)
      console.log("react coinPoints", event.detail.coinPoints)
      setEarnedPoints(pts)
    }

    const gameStart = () => {
      console.log("GAME STARTED!")
      setIsActive(true)
    }

    const updatePlayerLocation = (event) => {
      // if event
      console.log('playerLocation this is in react', event)
    }

    //iFrame to React communication event listener
    window.addEventListener("points", handler)
    window.addEventListener("gameStart", gameStart)

    window.addEventListener('message', message => {
      if (message.origin == 'https://jackson-default-spotxgames.dev.8thwall.app') {
        
        switch (message.data.name) {
          case 'playerPosition':
            setPlayerPosition({...message.data})
            break;
          case 'nearbyWayspots': 
            handleWayspots(message.data.wayspots)
          case 'loadingNearbyWayspots':  
            setLoadingNearbyWayspots({...message.data})
          default:
            break;
        }
        console.log(message)
        console.log(message.data)

          return; // Skip message in this event listener
      }

      // ...
    });


    //iFrame to React communication handler cleanup
    return () => {
      window.removeEventListener("points", handler)
      window.removeEventListener("gameStart", gameStart)
    }
  }, [])

  useEffect(() => {
    console.log("tracking the game")
    const endGame = async (timer) => {
      alert("game over!")
      setGameOver(true)
    }
    let interval = null
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1)
      }, 1000)
    } else if (isActive && seconds < 1) {
      endGame()
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isActive, seconds])


  return (
    <>
    <Link href="/">
    <IconButton
    size={'md'}
    icon={<ArrowBackIcon/>}
    >
      {'<--'}
    </IconButton>
    </Link>
    <Container fluid mt={8} >
      <Grid fluid justifyItems={'center'}>
        <GridItem>
        Time Remaining: {seconds}
        <br />
        Points: {earnedPoints}
        </GridItem>

      </Grid>  
      <Center>
          <Box
          // style={{ height: "75vh", width: "100vw" }}
          dangerouslySetInnerHTML={{
            __html: `<iframe
            id="my-iframe"
            style="border: 0; width: 75vh; height: 75vh"
            allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;geolocation;"
            src="https://jackson-default-spotxgames.dev.8thwall.app/sx-axion-sprint-1/">
            </iframe>`,
          }}
        />
        <Icon as={GrMapLocation}/>

        </Center>
        <RtsView playerPosition={playerPosition} loadingNearbyWayspots={loadingNearbyWayspots?.lnwPayload} nearbyWayspots={nearbyWayspots}/>
  </Container>
        </>
  )
}

export default ArPage