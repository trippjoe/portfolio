import { Flex, SimpleGrid, Box, Button, Heading, VStack, Image, Link, Badge, HStack } from '@chakra-ui/react';
import Head from 'next/head';
const projects = require('../public/assets/projects/projects.json');

function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Joe Tripp Portfolio</title>
                <meta name="description" content="Joe Tripp's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex minH="80vh" maxH="80vh" justify="center" alignSelf="center">
                <SimpleGrid columns={[1, 1, 2, 3]} spacing="9" overflowY={"scroll"}>
                    {projects.map((project) => (
                        <Box key={project.name} textAlign="center" maxW="sm" backgroundColor="#AD8351" borderRadius="lg" p="3" shadow="xl">
                            <VStack spacing="3" shadow="inner" p="3" borderRadius="lg">
                                <Image src={`../assets/projects/${project.image}`} alt={project.name} />
                                <Heading size="lg" color="black">{project.name}</Heading>
                                <HStack>
                                    {project.tech.map(tech => (
                                        <Badge key={project.name + tech}>{tech}</Badge>
                                    ))}
                                </HStack>
                                <Heading size="md" color="black">{project.description}</Heading>
                                <Button as={Link} href={project.github} target="_blank" w="75%" backgroundColor="#473622" color="white">Github Repo</Button>
                                {project.deployment ? <Button as={Link} href={project.deployment} target="_blank" w="75%" backgroundColor="#473622" color="white">Live Deployment</Button> : null}
                            </VStack>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Projects;