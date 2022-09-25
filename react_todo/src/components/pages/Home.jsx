import{memo} from "react"
import {Link} from "react-router-dom"
import { UnorderedList, ListItem, Center } from '@chakra-ui/react';

import MainButton from '../button/MainButton';

const Home = memo(
  () => {
    return (
  
        <Center p={10}>
          <UnorderedList spacing="50px" fontSize="24px" fontWeight="bold" mt="50px">
            <ListItem>残りタスク数:1</ListItem>
            <ListItem>完了したタスク数:1</ListItem>
            <ListItem>進捗:80%</ListItem>
            <MainButton><Link to="/list">タスク一覧を見る</Link></MainButton>
          </UnorderedList>
        </Center>
    );
  }
)

export default Home;
