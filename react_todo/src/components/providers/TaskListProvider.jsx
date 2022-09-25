import {useState,createContext,useMemo} from "react"

export const TaskListContext = createContext({});
export const TaskListProvider = (props) => {
  const {children} = props;
  const [incompleteTodo, setIncompleteTodo] = useState(["aa"]);
  const TaskListProviderValue = useMemo(()=>({incompleteTodo, setIncompleteTodo}),[incompleteTodo])

  return(
    <TaskListContext.Provider value={TaskListProviderValue}>
      {children}
    </TaskListContext.Provider>
  )
}
