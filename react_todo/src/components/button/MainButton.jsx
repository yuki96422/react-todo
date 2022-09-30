import { Button } from '@chakra-ui/react';

const MainButton = (props) => {
  const { children,bgColor,onClick } = props;
  return (
    <Button bgColor={bgColor} onClick={onClick} color="white" borderRadius={10} mr={3} _hover={{ opacity: 0.6 }} mt="50px">
      {children}
    </Button>
  );
};

export default MainButton;
