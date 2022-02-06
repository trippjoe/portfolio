import Head from 'next/head';
import { Flex, VStack, Image, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>About | Joe Tripp Portfolio</title>
        <meta name="description" content="Joe Tripp's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex justify="center" minH="80vh" maxH="100vh">
        <VStack spacing="6" textAlign="center" justify="center" px={[3, 0]}>
          <Image
            borderRadius='full'
            boxSize={['250px', '350px']}
            src='../assets/images/portrait.png'
            alt='Joe Tripp'
            border="2px"
          />
          <Heading size="lg" color="white">I&apos;m Joe Tripp, a 23 year old full stack developer</Heading>
          <Heading size="md" color="white">Aside from programming I enjoy spending my time hiking and producing electronic music</Heading>
        </VStack>
      </Flex>
    </div>
  )
}
