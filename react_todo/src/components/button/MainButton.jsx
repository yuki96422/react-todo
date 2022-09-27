import { Button } from '@chakra-ui/react';

const MainButton = (props) => {
  const { children } = props;
  return (
    <Button bgColor="teal.500" color="white" borderRadius={10} mr={3} _hover={{ bgColor: 'teal.300' }} mt="50px">
      {children}
    </Button>
  );
};

export default MainButton;
