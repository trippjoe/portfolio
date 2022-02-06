import Head from "next/head";
import { Flex } from '@chakra-ui/react';

function resume() {
    return (
        <>
            <Head>
                <title>Resume | Joe Tripp Portfolio</title>
                <meta name="description" content="Joe Tripp's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Flex minH="80vh" maxH="80vh" height="80vh" width="100vw">
                <iframe id='resume-pdf' src="https://docs.google.com/document/d/e/2PACX-1vQpGtwP_vusVCAhIq-2YW3SZpEpmXX612rgPYFvC1jfpkjEJKUJDeShUJS9YyHfBWOyEJn52fPrdvpJ/pub?embedded=true"></iframe>
            </Flex >
        </>
    );
}


export default resume;
