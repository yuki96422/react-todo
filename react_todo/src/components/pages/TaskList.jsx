import { Flex, Heading,VStack,Box} from '@chakra-ui/react';

const TaskList = () => {
  return (
    <Flex p={10}>
      <Heading as="h1" color="gray.600" fontSize={32}>
        Task List
      </Heading>
    
      <VStack>
        <Box bg="white" >aa</Box>
        <Box bg="white">aa</Box>
      </VStack>
    </Flex>
  );
};

export default TaskList;
