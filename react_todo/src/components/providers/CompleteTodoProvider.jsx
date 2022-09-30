import { useState, useMemo, createContext } from 'react';

export const CompleteTodoContext = createContext();

export const CompleteTodoProvider = (props) => {
  const { children } = props;
  const [completeTodo, countCompleteTodo] = useState(0);
  const completeTodoProviderValue = useMemo(() => ({ completeTodo, countCompleteTodo }), [completeTodo]);

  return <CompleteTodoContext.Provider value={completeTodoProviderValue}>{children}</CompleteTodoContext.Provider>;
};
