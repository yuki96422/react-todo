import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


import Header from './components/layout/Header';
import Theme from './theme/Theme';
import Router from './router/Router';
import { AddTaskProvider } from './components/providers/AddTaskProvider';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Header>
          <AddTaskProvider>
          <Router />
          </AddTaskProvider>
        </Header>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
