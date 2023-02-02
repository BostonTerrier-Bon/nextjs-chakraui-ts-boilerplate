import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '@/styles/Index.module.css'
import { Box, Flex, Heading, Img, Avatar } from '@chakra-ui/react'
import Container from '@/components/Container'
import DarkModeSwitch from '@/components/DarkModeSwitch'

export type IndexProps = {
  title?: string
}

const Index: NextPage = ({ title = 'Next.js × Chakra UI Boilerplate' }: IndexProps) => (
  <Container height="100vh">
    <DarkModeSwitch />
    <Flex 
      justify="center"
      align="center"
      height="100vh"
      bgGradient="linear(to-l, #537895, #09203f)"
      bgClip="text">
      <Flex
        justify="center"
        align="center"      
        w={'100%'}
        marginX='10'
      >
        {/* <Img src="/img/chakra-logo.png" alt="Logo" mr={4} /> */}
        <Avatar name='bon' size="lg" src='/img/bon.png' mr={4} />
        <Box>
          <Heading>{title}</Heading>
          <Box>
            <Link href={'/child'}> → Link to a child page</Link>
          </Box>
        </Box>

      </Flex>

    </Flex>
  </Container>
)

export default Index
