import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UnorderedList, ListItem, Center } from '@chakra-ui/react';

import MainButton from '../button/MainButton';
import { CompleteTodoContext } from '../providers/CompleteTodoProvider';
import { InCompleteTodoContext } from '../providers/InCompleteTodoProvider';

const Home = memo(() => {
  const { completeTodo } = useContext(CompleteTodoContext);
  const { incompleteTodo } = useContext(InCompleteTodoContext);
  const taskProgress = (completeTodo / (completeTodo + incompleteTodo.length)) * 100;
  return (
    <Center p={10}>
      <UnorderedList spacing="50px" fontSize="24px" fontWeight="bold" mt="50px">
        <ListItem>残りのTodo : {incompleteTodo.length}</ListItem>
        <ListItem>完了したTodo : {completeTodo}</ListItem>
        <ListItem>進捗 : {Number.isNaN(taskProgress) ? 0 : Math.floor(taskProgress)}%</ListItem>

        <Link to="/list">
          <MainButton>タスク一覧を見る </MainButton>
        </Link>
      </UnorderedList>
    </Center>
  );
});

export default Home;
