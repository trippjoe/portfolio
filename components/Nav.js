import React from "react";
import { HStack, Flex, Image, Heading } from '@chakra-ui/react';
import Link from "next/link";
import Head from "next/head";

function Navbar() {
    return (
        <Flex justify="center" maxH="10vh" pb="4">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400&display=swap" rel="stylesheet" />
            </Head>

            <Image zIndex="-5" alt="navbar green svg background" position="absolute" src='../assets/images/nav-bg3.svg' height="20vh" width="100vw" pb="70"></Image>
            <HStack spacing="6">
                <Heading color="white"><Link href="/">About</Link></Heading>
                <Heading color="white"><Link href="/projects">Projects</Link></Heading>
                {/* commenting out this nav link until i figure out the styling for the embedded resume pdf*/}
                {/* <Heading color="white"><Link href="/resume">Resume</Link></Heading> */}
                <Heading color="white"><a href="https://docs.google.com/document/d/1iQ13qVYcFTojTWqTqMh8zWADduocEJwVElU0uKbMVV4/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a></Heading>
            </HStack>
        </Flex >
    )
}

export default Navbar;