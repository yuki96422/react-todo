import { Text, Flex } from '@chakra-ui/react';

const Header = ({ children }) => {
  return (
    <>
      <Flex display="flex" alignItems="center" justifyContent="center" bgColor="teal" color="white">
      <Text fontWeight="bold">Todo App</Text>
      </Flex>
      {children}
    </>
  );
};

export default Header;
