import '@/styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>NextJS with Chakra-ui Boilerplate</title>
        <meta name="description" content="NextJS with Chakra-ui Boilerplate" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
