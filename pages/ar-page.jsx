import { Button, Container, Grid, GridItem, Box } from '@chakra-ui/react';
import Link from 'next/link';
const ArPage = () => {

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