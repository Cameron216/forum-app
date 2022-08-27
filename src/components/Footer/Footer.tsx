import { Flex } from '@chakra-ui/react';
import React from 'react';

import classes from './footer.module.css';

const Footer = () => {
  return (
    <Flex 
      mt='2000px' // has big top margin just while testing layout
      bg='grey.600' 
      w='100%' 
      h='250px' 
      justify='center' 
      align='center' 
      direction='column'
    >
      Footer stuff
    </Flex>
  )
};

export default Footer;
