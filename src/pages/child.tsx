import type { NextPage } from 'next'
import { Flex, Heading } from '@chakra-ui/react'
import Container from '@/components/Container'

const Child: NextPage = () => (
  <Container height="100vh">
    <Flex>
      <Heading>Child</Heading>
    </Flex>
  </Container>
)

export default Child
