import {useState,createContext,useMemo} from "react"

const TaskListContext = createContext({});
const TaskListProvider = (props) => {
  const {children} = props;
  const [incompleteTodo, setIncompleteTodo] = useState(["aa"]);
  const TaskListProviderValue = useMemo(()=>({incompleteTodo, setIncompleteTodo}),[incompleteTodo])

  return(
    <TaskListContext.Provider value={TaskListProviderValue}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListProvider;