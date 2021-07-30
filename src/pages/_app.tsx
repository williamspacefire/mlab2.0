import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import React from 'react'

const themeConfig = {
    useSystemColorMode: true,
}

const theme = extendTheme({ themeConfig })

class MlabApp extends React.Component<AppProps> {
    render() {
        const Component = this.props.Component

        return (
            <ChakraProvider theme={theme}>
                <Component {...this.props.pageProps} />
            </ChakraProvider>
        )
    }
}

export default MlabApp
