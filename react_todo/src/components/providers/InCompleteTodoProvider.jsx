import { useState, createContext, useMemo } from 'react';
import useInitialTodo from "../../hooks/useInitialTodo"

export const InCompleteTodoContext = createContext({});

export const InCompleteTodoProvider = (props) => {
  const { children } = props;
  const [initialTodo] = useInitialTodo();
  const [incompleteTodo, setIncompleteTodo] = useState([initialTodo]);
  const inCompleteTodoProviderValue = useMemo(() => ({ incompleteTodo, setIncompleteTodo }), [incompleteTodo]);

  return (
    <InCompleteTodoContext.Provider value={inCompleteTodoProviderValue}>{children}</InCompleteTodoContext.Provider>
  );
};
