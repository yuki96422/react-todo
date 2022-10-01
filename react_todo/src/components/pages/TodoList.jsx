import { Heading, VStack, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { memo, useContext } from 'react';

import TodoCard from '../todocard/TodoCard';
import MainButton from '../button/MainButton';
import AddTodoModal from '../popup/AddTodoModal';
import { InCompleteTodoContext } from '../providers/InCompleteTodoProvider';
import { CompleteTodoContext } from '../providers/CompleteTodoProvider';

const TodoList = memo(() => {
  const { incompleteTodo, setIncompleteTodo } = useContext(InCompleteTodoContext);
  const { completeTodo, countCompleteTodo } = useContext(CompleteTodoContext);

  const onClickComplete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
    countCompleteTodo(completeTodo + 1);
  };

  const onClickDelete = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };

  return (
    <>
      <Box p={10}>
        <Heading as="h1" fontSize="32px">
          Task List
        </Heading>

        <VStack spacing="30px" alignItems="start" p="20px" mt="30px">
          {incompleteTodo.map((todo, index) => (
            <TodoCard
              key={index}
              onClickComplete={() => onClickComplete(index)}
              onClickDelete={() => onClickDelete(index)}
            >
              {todo}
            </TodoCard>
          ))}
          {incompleteTodo.length === 0 && (
            <Text fontSize="16px" fontWeight="bold">
              残っているタスクはありません
            </Text>
          )}

          <Link to="/">
            <MainButton bgColor="teal.500">戻る</MainButton>
          </Link>
        </VStack>
      </Box>
      <AddTodoModal />
    </>
  );
});

export default TodoList;
