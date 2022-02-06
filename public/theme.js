import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const theme = extendTheme({
    fonts: {
        heading: 'Roboto Condensed',
        body: 'Roboto Condensed'
    },
    config
});

export default theme;