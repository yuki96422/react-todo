import { memo } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';

const TaskCard = memo((props) => {
  const { children } = props;
  return (
    <Flex alignItems="center">
      <Box bg="white" w="800px" h="50px" p="10px" borderRadius="10px" lineHeight="30px" shadow="md">
        <Button
          bg="none"
          _hover={{ color: 'none' }}
          _active={{ color: 'none' }}
          size="xs"
          onClick={console.log('taskcardの完了button')}
        >
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
      <Button bg="none"
          _hover={{ color: 'none' }}
          _active={{ color: 'none' }}
          size="xs"
          onClick={console.log('taskcardの削除button')}>
      <CloseIcon ml="20px" cursor="pointer" />
      </Button>
    </Flex>
  );
});

export default TaskCard;
