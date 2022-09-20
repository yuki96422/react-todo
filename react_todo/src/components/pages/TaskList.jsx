import {Heading, VStack, Box} from '@chakra-ui/react';
import {CheckIcon} from "@chakra-ui/icons"


const TaskList = () => {
  return (
    <Box p={10}>
      <Heading as="h1" color="gray.600" fontSize={32}>
        Task List
      </Heading>

      <VStack spacing={6} alignItems="start" p={10}>
   
        <Box bg="white" w="800px" h="50px" p="10px" borderRadius="10px" lineHeight="25px"><CheckIcon p="5px"/>aa</Box>
        <Box bg="white" w="800px" h="50px" p="10px" borderRadius="10px" lineHeight="25px">aa</Box>
        <Box bg="white" w="800px" h="50px" p="10px" borderRadius="10px" lineHeight="25px">aa</Box>
      </VStack>
    </Box>
  );
};

export default TaskList;
