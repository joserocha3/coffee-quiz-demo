import React from 'react'
import { Helmet } from 'react-helmet'
import { ChakraProvider, Box } from '@chakra-ui/react'

import App from '../components/App'

const IndexPage = () => {
  return (
    <ChakraProvider>
      <Box bg="blue.100" h="100vh" py={1}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coffee Quiz Demo</title>
          <link rel="canonical" href="https://coffee-quiz-demo.netlify.app" />
        </Helmet>
        <App />
      </Box>
    </ChakraProvider>
  )
}

export default IndexPage
