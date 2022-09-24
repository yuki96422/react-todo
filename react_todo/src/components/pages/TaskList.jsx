import {Heading, VStack, Box} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {memo} from "react";

import TaskCard from '../taskcard/Taskcard';
import MainButton from "../button/MainButton";
import AddTaskModal from "../modal/AddTaskModal";


const TaskList = memo(() => {

  return (
    <>
      <Box p={10}>
      <Heading as="h1" color="gray.600" fontSize="32px">
        Task List
      </Heading>

      <VStack spacing="30px" alignItems="start" p="20px" mt="30px">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <MainButton><Link to="/">戻る</Link></MainButton>
      </VStack>
    </Box>
    <AddTaskModal />
    </>
  );
}
)

export default TaskList;
