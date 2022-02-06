import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Navbar from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <Box fontSize="xl">
            <Grid minH="100vh" minW="100vw">
                <Navbar />
                {children}
                <Footer />
            </Grid>
        </Box>
    )
};

export default Layout;