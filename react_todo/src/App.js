import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


import Header from './components/layout/Header';
import Theme from './theme/Theme';
import Router from './router/Router';
import TaskListProvider from './components/providers/TaskListProvider';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Header>
          <TaskListProvider>
          <Router />
          </TaskListProvider>
        </Header>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
