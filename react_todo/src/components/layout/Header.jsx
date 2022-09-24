import { Text, Flex } from '@chakra-ui/react';

const Header = ({ children }) => {
  return (
    <>
      <Flex display="flex" alignItems="center" justifyContent="center" bgColor="teal.500" color="white" h="60px">
        <Text fontWeight="bold" fontSize={20}>Todo App</Text>
      </Flex>
      {children}
    </>
  );
};

export default Header;
