//have conditional rendering if logged in or not
//when logged in becomes utility sidebar with profile settings etc.

import React, { useState, useContext } from 'react';
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
} from '@chakra-ui/react';

const LoginDrawer = ({ isOpen, onClose }: any) => {
  const firstField = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userctx = useContext(UserContext);

  const handleSubmit = () => {
    userctx?.login(username, password);
    setUsername('');
    setPassword('');
    onClose();
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
          <DrawerHeader borderBottomWidth="1px">Log in</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Username</FormLabel>
                <Input
                  ref={firstField}
                  id="username"
                  value={username}
                  placeholder="Please enter user name"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
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
