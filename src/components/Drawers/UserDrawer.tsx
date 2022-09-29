import React, { useContext } from 'react';
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
  Stack,
  Link,
} from '@chakra-ui/react';

const UserDrawer = ({ isOpen, onClose }: any) => {
  const userctx = useContext(UserContext);

  const handleLogout = () => {
    userctx?.logout();
    onClose();
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="grey.400">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            {userctx?.user.username}
          </DrawerHeader>

          <Box
            bg={userctx?.user.banner}
            h="100px"
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <h2>Add user banner choice here</h2>
          </Box>

          <DrawerBody>
            <Stack spacing="24px">
              <Link as={ReactLink} to="">
                <h2>Profile</h2>
              </Link>
              <Link as={ReactLink} to="">
                <h2>Watched posts</h2>
              </Link>
              <Link as={ReactLink} to="">
                <h2>Friends</h2>
              </Link>
              <Link as={ReactLink} to="">
                <h2>Trophies</h2>
              </Link>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={handleLogout}>
              Log out
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default UserDrawer;
