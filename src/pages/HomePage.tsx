import Layout from '../components/Layouts/Layout';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../hooks/UserContext';
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Flex,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

const HomePage = () => {
  const userctx = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/post')
      .then((res) => res.json())
      .then((data: any) => {
        setPosts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const time = 'Yesterday 6:30 PM';
  const replies = 43;
  const usernameTemp = 'Username';
  const postTitleTemp =
    'Post title. Can go full width and wrap down or preview to limit?...';
  const postTextTemp =
    'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ';
  const recentReply = ' Most recent reply preview text...';

  return (
    <Layout>
      <Flex py="4" align="center" direction="column">
        {' '}
        <h1>Home page</h1>
        {userctx?.user.username && (
          <Text mt="3">Hey {userctx.user.username}!</Text>
        )}
      </Flex>
      <VStack py="2" spacing="30px">
        {posts &&
          posts.map((post: any) => {
            return (
              <Box
                key={post.id}
                borderRadius="5"
                p="2"
                width="45%"
                minW="600"
                bg="grey.400"
                boxShadow="md"
              >
                <Flex px="3" py="2" justify="space-between" align="center">
                  <Flex align="center">
                    <Avatar size="sm" bg="brand.100"></Avatar>
                    <Text ml="3" opacity="0.7">
                      {usernameTemp}
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="0.8em" opacity="0.7">
                      {time}
                    </Text>
                  </Flex>
                </Flex>
                <Box px="3" py="3">
                  <Text pb="3" fontWeight="bold" fontSize="1.1rem">
                    {post.postTitle}
                  </Text>
                  <Text>{post.postContent}</Text>
                </Box>
                <Divider />
                <Flex py="4" px="3" justify="space-between" align="center">
                  <Flex align="center">
                    <Avatar size="xs" bg="brand.100"></Avatar>
                    <Text ml="2" opacity="0.7">
                      {recentReply}
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <ChatIcon w={4} h={4} />
                    <Text ml="1">{replies}</Text>
                  </Flex>
                </Flex>
              </Box>
            );
          })}
      </VStack>
    </Layout>
  );
};

export default HomePage;
