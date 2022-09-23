import {Heading, VStack, Box} from '@chakra-ui/react';

import TaskCard from '../taskcard/Taskcard';
import AddTaskModal from "../modal/AddTaskModal";


const TaskList = () => {
  return (
    <>
        <Box p={10}>
      <Heading as="h1" color="gray.600" fontSize="32px">
        Task List
      </Heading>

      <VStack spacing="10px" alignItems="start" p="20px">
        <TaskCard />
      </VStack>
    </Box>
    <AddTaskModal />
    </>
  );
};

export default TaskList;
