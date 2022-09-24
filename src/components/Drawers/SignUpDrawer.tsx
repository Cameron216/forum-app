//add proper form and functionality for signing up

import React, { useState } from 'react';

import {
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
  Input,
  Checkbox,
} from '@chakra-ui/react';

const SignUpDrawer = ({ isOpen, onClose }: any) => {
  const firstField = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const [userDetails, setUserDetails] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const signUpOnchange = (e: any) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="grey.400">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Create a new account
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  name="username"
                  placeholder="Please enter user name"
                  onChange={(e) => signUpOnchange(e)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="firstName">First Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Please enter first name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="lastName">Last Name</FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Please enter last name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Please email address"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Choose a strong password"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="terms"></FormLabel>
                <Checkbox colorScheme="teal">
                  I agree to the Terms &amp; Conditions
                </Checkbox>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button>Sign up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SignUpDrawer;
