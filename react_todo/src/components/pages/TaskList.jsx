import { Heading, VStack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { memo, useContext } from 'react';

import TaskCard from '../taskcard/Taskcard';
import MainButton from '../button/MainButton';
import AddTaskModal from '../modal/AddTaskModal';
import { TaskListContext } from '../providers/TaskListProvider';
import { CountContext } from '../providers/CountProvider';

const TaskList = memo(() => {
  const { incompleteTodo, setIncompleteTodo } = useContext(TaskListContext);
  const {deleteTask,countDeleteTask} = useContext(CountContext);
  
  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index,1);
    setIncompleteTodo(newTodo);
    countDeleteTask(deleteTask+1);
  }
  return (
    <>
      <Box p={10}>
        <Heading as="h1" color="gray.600" fontSize="32px">
          Task List
        </Heading>

        <VStack spacing="30px" alignItems="start" p="20px" mt="30px">
          {incompleteTodo.map((todo, index) => (
            <TaskCard key={todo} onClickComplete={() => onClickComplete(index)} onClickDelete={() => onClickDelete(index)}>
              {todo}
            </TaskCard>
          ))}
          <MainButton>
            <Link to="/">戻る</Link>
          </MainButton>
        </VStack>
      </Box>
      <AddTaskModal />
    </>
  );
});

export default TaskList;
