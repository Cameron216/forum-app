import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { UserContext } from '../../hooks/UserContext';

import LoginDrawer from '../Drawers/LoginDrawer';
import SignUpDrawer from '../Drawers/SignUpDrawer';
import UserDrawer from '../Drawers/UserDrawer';

const TopNav = () => {
  const {
    isOpen: isSignInOpen,
    onOpen: onOpenSignIn,
    onClose: onCloseSignIn,
  } = useDisclosure();
  const {
    isOpen: isLogInOpen,
    onOpen: onOpenLogIn,
    onClose: onCloseLogIn,
  } = useDisclosure();
  const {
    isOpen: isUserOpen,
    onOpen: onOpenUser,
    onClose: onCloseUser,
  } = useDisclosure();

  const userctx = useContext(UserContext);

  return (
    <>
      <Flex w="100%" bg="grey.600" justify="center" position="sticky" top="0">
        <Flex
          w="95%"
          p={2}
          display="flex"
          alignItems="center"
          justify="space-between"
        >
          <Box>Forum Z{/* standard link to home page? */}</Box>
          {userctx?.user.username ? (
            <Button size="sm" onClick={onOpenUser}>
              {userctx?.user.username}
            </Button>
          ) : (
            <ButtonGroup size="sm" spacing="4">
              <Button variant="solid" onClick={onOpenSignIn}>
                Sign up
              </Button>
              <Button variant="outline" onClick={onOpenLogIn}>
                Login
              </Button>
            </ButtonGroup>
          )}
        </Flex>
      </Flex>

      <SignUpDrawer
        isOpen={isSignInOpen}
        onClose={onCloseSignIn}
        openLogin={onOpenLogIn}
      />
      <LoginDrawer
        isOpen={isLogInOpen}
        onClose={onCloseLogIn}
        openSignIn={onOpenSignIn}
      />
      <UserDrawer isOpen={isUserOpen} onClose={onCloseUser} />
    </>
  );
};

export default TopNav;
