import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Header from './components/layout/Header';
import Theme from './theme/Theme';
import Router from './router/Router';
import { InCompleteTodoProvider } from './components/providers/InCompleteTodoProvider';
import { CompleteTodoProvider } from './components/providers/CompleteTodoProvider';

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <BrowserRouter>
        <Header>
          <InCompleteTodoProvider>
            <CompleteTodoProvider>
              <Router />
            </CompleteTodoProvider>
          </InCompleteTodoProvider>
        </Header>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
