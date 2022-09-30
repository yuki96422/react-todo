import { useState, createContext, useMemo } from 'react';

export const InCompleteTodoContext = createContext({});

export const InCompleteTodoProvider = (props) => {
  const { children } = props;
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const inCompleteTodoProviderValue = useMemo(() => ({ incompleteTodo, setIncompleteTodo }), [incompleteTodo]);

  return (
    <InCompleteTodoContext.Provider value={inCompleteTodoProviderValue}>{children}</InCompleteTodoContext.Provider>
  );
};
