import React, { useState, useContext } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import { UserContext } from '../../hooks/UserContext';
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
  InputGroup,
  InputRightElement,
  FormControl,
  FormErrorMessage,
  Text,
} from '@chakra-ui/react';

const LoginDrawer = ({ isOpen, onClose, openSignIn }: any) => {
  const firstField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [username, setUsername] = useState('');
  const [usernameEmpty, setUsernameEmpty] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const userctx = useContext(UserContext);

  // ------------------------------------------------------- temp data
  const dan = {
    username: 'Dante',
    firstName: 'Daniel',
    lastName: 'Stewardson',
    banner: 'tomato',
    friends: ['Cameron', 'Shireen'],
    watchedPosts: [],
  };

  const shireen = {
    username: 'Shireen',
    firstName: 'Shireen',
    lastName: 'Nicholls',
    banner: 'blue',
    friends: ['Cameron', 'Daniel'],
    watchedPosts: [],
  };
  // -----------------------------------------------------------------------

  const handleChange = (e: any) => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value);
        setUsernameEmpty(false);
        setErrMsg('');
        break;
      case 'password':
        setPassword(e.target.value);
        setPasswordEmpty(false);
        setErrMsg('');
        break;
    }
  };

  const handleSubmit = () => {
    if (!username || !password) {
      if (!username) {
        setUsernameEmpty(true);
      }
      if (!password) {
        setPasswordEmpty(true);
      }
      return;
    }
    // ---------------------------------------------------change for fetch call
    if (username === 'dan') {
      userctx?.login(dan);
      handleCloseDrawer();
    } else if (username === 'shireen') {
      userctx?.login(shireen);
      handleCloseDrawer();
    } else {
      setErrMsg(
        'User not found/password inccorect message\n(use dan or shireen)'
      );
    }
  };

  const goToSignIn = () => {
    handleCloseDrawer();
    openSignIn();
  };

  const handleCloseDrawer = () => {
    setUsername('');
    setPassword('');
    setShowPassword(false);
    setUsernameEmpty(false);
    setPasswordEmpty(false);
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
          <DrawerHeader borderBottomWidth="1px">Log in</DrawerHeader>

          <DrawerBody pos="relative">
            <Stack spacing="24px">
              <Box>
                <FormControl isInvalid={usernameEmpty}>
                  <FormLabel htmlFor="username">Username</FormLabel>
                  <Input
                    ref={firstField}
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Please enter user name"
                    onChange={(e) => handleChange(e)}
                  />
                  {usernameEmpty && (
                    <FormErrorMessage>Username is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>

              <Box>
                <FormControl isInvalid={passwordEmpty}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter password"
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
                  {passwordEmpty && (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  )}
                </FormControl>
              </Box>
              <Box>
                {errMsg && (
                  <Text
                    color="error.100"
                    fontSize="14"
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {errMsg}
                  </Text>
                )}
              </Box>
            </Stack>
            <Box pos="absolute" bottom="10px">
              Not a member?{' '}
              <ReactLink to="" onClick={goToSignIn}>
                Sign up here!
              </ReactLink>
            </Box>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={handleCloseDrawer}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Log in</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default LoginDrawer;
