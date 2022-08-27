import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Flex bg='grey.600' w='100%' h='250px' justify='center' align='center' direction='column'>
      <Box>
        Big header
      </Box>
      <Box>
        With sticky navbar on scroll
      </Box>
    </Flex>
  )
}

export default Header