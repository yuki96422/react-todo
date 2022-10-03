import { useState, createContext, useMemo, useEffect } from 'react';
import useInitialTodo from '../../hooks/useInitialTodo';

export const InCompleteTodoContext = createContext({});

export const InCompleteTodoProvider = (props) => {
  const { children } = props;
  const { initialTodo, getInitialTodo } = useInitialTodo();
  useEffect(() => {
    getInitialTodo()}, []);
  
  const [incompleteTodo, setIncompleteTodo] = useState([initialTodo.title]);
  const inCompleteTodoProviderValue = useMemo(() => ({ incompleteTodo, setIncompleteTodo }), [incompleteTodo]);

  return (
    <InCompleteTodoContext.Provider value={inCompleteTodoProviderValue}>{children}</InCompleteTodoContext.Provider>
  );
};
