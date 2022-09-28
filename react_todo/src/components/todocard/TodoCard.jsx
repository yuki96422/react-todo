import { memo } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TodoCard = memo((props) => {
  const { children, onClickComplete, onClickDelete } = props;

  return (
    <Flex alignItems="center">
      <Box
        bg="white"
        w={{ base: '350px', md: '700px' }}
        h="50px"
        p="10px"
        borderRadius="10px"
        lineHeight="30px"
        shadow="md"
      >
        <Button bg="none" _hover={{ color: 'none' }} _active={{ color: 'none' }} size="xs" onClick={onClickComplete}>
          <CheckIcon
            w="20px"
            h="20px"
            ml="10px"
            mr="20px"
            color="teal.800"
            cursor="pointer"
            _hover={{ color: 'teal.300' }}
            transition="0.2s"
          />
        </Button>
        {children}
      </Box>
      <Button bg="none" _hover={{ color: 'none' }} _active={{ color: 'none' }} size="xs" onClick={onClickDelete}>
        <CloseIcon ml="20px" cursor="pointer" />
      </Button>
    </Flex>
  );
});

export default TodoCard;
