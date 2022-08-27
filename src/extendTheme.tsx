import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'grey.500',
        color: 'white',
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  colors: {
    brand: {
        100: '#1D4044'
    },
    buttons: {
        100: 'blue'
    },
    grey: {
        600: 'hsla(0, 0%, 8%, 1)',
        500: 'hsla(0, 0%, 10%, 1)',
        400: 'hsla(0, 0%, 12%, 1)',
        300: 'hsla(0, 0%, 14%, 1)',
        200: 'hsla(0, 0%, 16%, 1)',
        100: 'hsla(0, 0%, 1%, 1)'
    }
  },
  fonts: {
    body: '',
    header: '',
    posts: '',
  },
  components: {
    Button: {
        defaultProps: {
            colorScheme: 'teal'
        }
    },
    Submit: {
        // colorScheme: 'teal'
    },
    Drawer: {
        defaultProps: {
            size: 'sm'
          }
    }
  }
});

export default customTheme;
