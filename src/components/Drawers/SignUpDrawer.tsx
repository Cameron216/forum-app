//add proper form and functionality for signing up

import React, { useEffect, useState } from 'react';
import { Link as ReactLink } from 'react-router-dom';
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
  Flex,
  Stack,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react';

const SignUpDrawer = ({ isOpen, onClose, openLogin }: any) => {
  const firstField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [showPassword, setShowPassword] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [checkTermsErr, setCheckTermsErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [userDetails, setUserDetails] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [userDetailsEmpty, setUserDetailsEmpty] = useState({
    username: false,
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    if (Object.values(userDetailsEmpty).every((e) => e === false) === true) {
      setErrMsg('');
    }
  }, [userDetails, userDetailsEmpty]);

  const signUpOnchange = (e: any) => {
    setUserDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setUserDetailsEmpty((prev) => ({
      ...prev,
      [e.target.name]: false,
    }));
  };

  const handleCheckedTerms = () => {
    setTermsChecked(!termsChecked);
    setCheckTermsErr(false);
  };

  const handleSubmit = () => {
    //validate and POST user information
    if (Object.values(userDetails).includes('')) {
      for (const [key, value] of Object.entries(userDetails)) {
        if (value === '') {
          setUserDetailsEmpty((prev) => ({
            ...prev,
            [key]: true,
          }));
        }
      }
      setErrMsg('Please fill in required fields');
      return;
    }
    if (termsChecked) {
      postNewUser(userDetails);
    } else {
      setCheckTermsErr(true);
    }
  };

  const postNewUser = async (newUser: any) => {
    try {
      // const response = await fetch(url, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newUser),
      // });
      setUserDetails({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      handleCloseDrawer();
      openLogin();
    } catch (err) {
      if (err === 409) {
        setErrMsg('Username taken');
      } else if (err === 'No response') {
        setErrMsg('Sign up failed');
      }
    }
  };

  const handleCloseDrawer = () => {
    setTermsChecked(false);
    setCheckTermsErr(false);
    setUserDetails({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
    setUserDetailsEmpty({
      username: false,
      firstName: false,
      lastName: false,
      email: false,
      password: false,
    });
    setErrMsg('');
    onClose();
  };

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={handleCloseDrawer}
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
                <FormControl isInvalid={userDetailsEmpty.username}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    ref={firstField}
                    id="username"
                    name="username"
                    value={userDetails.username}
                    placeholder="Please enter user name"
                    onChange={(e) => signUpOnchange(e)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isInvalid={userDetailsEmpty.firstName}>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={userDetails.firstName}
                    placeholder="Please enter first name"
                    onChange={(e) => signUpOnchange(e)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isInvalid={userDetailsEmpty.lastName}>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={userDetails.lastName}
                    placeholder="Please enter last name"
                    onChange={(e) => signUpOnchange(e)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isInvalid={userDetailsEmpty.email}>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={userDetails.email}
                    placeholder="Please email address"
                    onChange={(e) => signUpOnchange(e)}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl isInvalid={userDetailsEmpty.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={userDetails.password}
                      placeholder="Choose a strong password"
                      onChange={(e) => signUpOnchange(e)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        variant="outline"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>

              {errMsg && <Box color="error.100">{errMsg}</Box>}

              <Flex align="center">
                <Box>
                  <FormControl isInvalid={checkTermsErr}>
                    <FormLabel htmlFor="terms"></FormLabel>
                    <Checkbox
                      colorScheme="teal"
                      onChange={() => handleCheckedTerms()}
                    >
                      <Box ml="2">
                        I agree to the{' '}
                        <ReactLink to="">Terms &amp; Conditions</ReactLink>
                      </Box>
                    </Checkbox>
                    {checkTermsErr && (
                      <FormErrorMessage>Please agree to terms</FormErrorMessage>
                    )}
                  </FormControl>
                </Box>
              </Flex>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Sign up</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SignUpDrawer;
