import { memo} from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TaskCard = memo(() => {
  return (
    <Flex alignItems="center">
      <Box bg="white" w="800px" h="50px" p="10px" borderRadius="10px" lineHeight="30px" shadow="md">
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
       タスクです
      </Box>
      <CloseIcon ml="20px" cursor="pointer" />
    </Flex>
  );
});

export default TaskCard;
