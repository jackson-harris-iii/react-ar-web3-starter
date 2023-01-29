import { Button, Container, Grid, GridItem, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
const ArPage = () => {

  const [earnedPoints, setEarnedPoints] = useState(0)
  const [seconds, setSeconds] = useState(15)
  const [isActive, setIsActive] = useState(false)
  const [gamerOver, setGameOver] = useState(false)
  const [loading, setLoading] = useState(false)
  const [dialogModal, setDialogModal] = useState(false)
  const [dialogModalUnChecked, setDialogModalUnChecked] = useState(true)
  const IFRAME_ID = "my-iframe"

  useEffect(() => {
    window.XRIFrame.registerXRIFrame(IFRAME_ID)
    return () => {
      window.XRIFrame.deregisterXRIFrame()
    }
  }, [])

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

    //iFrame to React communication event listener
    window.addEventListener("points", handler)
    window.addEventListener("gameStart", gameStart)

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
    <Button>
      {'<--'}
    </Button>
    </Link>
    <Container fluid mt={8} >
      <Grid fluid justifyItems={'center'}>
        <GridItem>
        Time Remaining: {seconds}
        <br />
        Points: {earnedPoints}
        </GridItem>
        <GridItem>
    <Box
    h="720px"
    w="450px"
          className="mh-100 w-100"
          style={{ height: "720px", width: "400px" }}
          dangerouslySetInnerHTML={{
            __html: `<iframe
            id="my-iframe"
            style="border: 0; width: 100%; height: 100%"
            allow="camera;microphone;gyroscope;accelerometer;"
            src="demoARexperience.html">
            </iframe>`,
          }}
        />
              </GridItem>
      </Grid>  
  </Container>
        </>
  )
}

export default ArPage