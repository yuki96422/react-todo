import { useState, useMemo, createContext } from 'react';

export const CompleteTodoContext = createContext();

export const CompleteTodoProvider = (props) => {
  const { children } = props;
  const [completeTodo, countCompleteTodo] = useState(0);
  const CompleteTodoProviderValue = useMemo(() => ({ completeTodo, countCompleteTodo }), [completeTodo]);

  return <CompleteTodoContext.Provider value={CompleteTodoProviderValue}>{children}</CompleteTodoContext.Provider>;
};
