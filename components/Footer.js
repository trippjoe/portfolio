import React from "react";
import { HStack, Flex, Image } from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';
import { RiLinkedinLine, RiMailLine } from 'react-icons/ri';

function Footer() {
    return (
        <>
            {/* <Image zIndex="-7" alt="footer green svg background" position="absolute" bottom={0} src='../assets/images/footer-bg.svg' height="20vh" width="100vw" pt="70"></Image> */}
            <Flex justify="center" maxH="10vh" maxW="100vw">
                <HStack spacing="6">
                    <a target="_blank" rel="noreferrer" href="https://github.com/trippjoe/">
                        <FaGithub size={50} color={"white"} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/trippjoe/">
                        <RiLinkedinLine size={50} color={"white"} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="mailto:tripp.j@hotmail.com">
                        <RiMailLine size={50} color={"white"} />
                    </a>
                </HStack>
            </Flex>
        </>
    )
}

export default Footer;