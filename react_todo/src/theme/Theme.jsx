import { extendTheme } from '@chakra-ui/react';

const Theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'gray.100',
        color: 'gray.600',
      },
    },
  },
});

export default Theme;
