import { 
  Box, 
  Button, 
  ButtonGroup, 
  Flex, 
  useDisclosure, } from '@chakra-ui/react'
import React from 'react'

import UserDrawer from '../Drawers/UserDrawer'
import SignUpDrawer from '../Drawers/SignUpDrawer'

const TopNav = () => {
const { isOpen: isSignInOpen, onOpen: onOpenSignIn, onClose: onCloseSignIn } = useDisclosure()
const { isOpen: isLogInOpen, onOpen: onOpenLogIn, onClose: onCloseLogIn } = useDisclosure()

return (
  <>
      <Flex w='100%' bg='grey.600' justify='center' position='sticky' top='0'>
          <Flex w='95%' p={2} display='flex' alignItems='center' justify='space-between'>
              <Box>
                  Forum Z
                  {/* standard link to home page? */}
              </Box>
              <ButtonGroup size='sm' spacing='4'>
                  <Button variant='solid' onClick={onOpenSignIn}>Sign up</Button>
                  <Button variant='outline' onClick={onOpenLogIn}>Login</Button>
                  {/* Buttons change to user icon and burger menu button for side drawer when logged in */}
              </ButtonGroup>
          </Flex>
      </Flex>

      <SignUpDrawer isOpen={isSignInOpen} onClose={onCloseSignIn} />
      <UserDrawer isOpen={isLogInOpen} onClose={onCloseLogIn}/>
  </>
)
}

export default TopNav