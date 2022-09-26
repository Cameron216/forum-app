import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'grey.500',
        color: 'white',
      },
      a: {
        color: '#38B2AC',
        fontWeight: 'bold',
        _hover: {
          textDecoration: 'none',
          color: '#2C7A7b',
        },
      },
    },
  },
  colors: {
    brand: {
      100: '#2C7A7b',
    },
    buttons: {
      100: 'blue',
    },
    grey: {
      600: 'hsla(0, 0%, 8%, 1)',
      500: 'hsla(0, 0%, 10%, 1)',
      400: 'hsla(0, 0%, 12%, 1)',
      300: 'hsla(0, 0%, 14%, 1)',
      200: 'hsla(0, 0%, 16%, 1)',
      100: 'hsla(0, 0%, 1%, 1)',
    },
    error: {
      100: '#E53E3E',
    },
    links: {
      100: '#2C7A7b',
    },
  },
  fonts: {
    body: '',
    header: '',
    posts: '',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'teal',
      },
    },
    Drawer: {
      defaultProps: {
        size: 'sm',
      },
    },
    Badge: {
      defaultProps: {
        colorScheme: 'teal',
      },
    },
  },
});

export default customTheme;
