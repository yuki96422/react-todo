import {Heading, VStack, Box } from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {memo,useContext} from "react";

import TaskCard from '../taskcard/Taskcard';
import MainButton from "../button/MainButton";
import AddTaskModal  from "../modal/AddTaskModal";
import {TaskListContext}from "../providers/TaskListProvider"

const TaskList = memo(() => {
  const { incompleteTodo } = useContext(TaskListContext);
  return (
    <>
      <Box p={10}>
      <Heading as="h1" color="gray.600" fontSize="32px">
        Task List
      </Heading>

      <VStack spacing="30px" alignItems="start" p="20px" mt="30px">
        { incompleteTodo.map((todo) => <TaskCard key={todo}>{todo} </TaskCard>)}
        <MainButton><Link to="/">戻る</Link></MainButton>
      </VStack>
    </Box>
    <AddTaskModal />
    </>
  );
}
)

export default TaskList;
