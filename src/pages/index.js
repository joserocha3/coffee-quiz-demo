import React from 'react'
import { Helmet } from 'react-helmet'
import { ChakraProvider } from '@chakra-ui/react'

import App from '../components/App'

const IndexPage = () => {
  return (
    <ChakraProvider>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Coffee Quiz Demo</title>
          <link rel="canonical" href="https://coffee-quiz-demo.netlify.app" />
        </Helmet>
        <App />
      </>
    </ChakraProvider>
  )
}

export default IndexPage
