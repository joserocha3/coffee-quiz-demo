import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

import App from '../components/App'

const IndexPage = () => {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}

export default IndexPage
