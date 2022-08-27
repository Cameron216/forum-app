
//have conditional rendering if logged in or not
//when logged in becomes utility sidebar with profile settings etc.

import React from 'react'
import { useDisclosure, 
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Box,
  FormLabel,
  Stack,
  Input, } from '@chakra-ui/react'

const UserDrawer = ( {isOpen, onClose}: any ) => {
  const firstField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  
  return (
    <>
    <Drawer
      isOpen={isOpen}
      placement='right'
      initialFocusRef={firstField}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent bg='grey.400'>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth='1px'>
          Log in
        </DrawerHeader>

        <DrawerBody>
          <Stack spacing='24px'>
            <Box>
              <FormLabel htmlFor='username'>Username</FormLabel>
              <Input
                ref={firstField}
                id='username'
                placeholder='Please enter user name'
              />
            </Box>

            <Box>
              <FormLabel htmlFor='password'>Password</FormLabel>
                <Input
                  type='password'
                  id='password'
                  placeholder='Enter password'
                />
            </Box>
          </Stack>
        </DrawerBody>

        <DrawerFooter borderTopWidth='1px'>
          <Button variant='outline' mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button>Log in</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
  )
}

export default UserDrawer