import {useState,useMemo,createContext} from "react"

export const CountContext = createContext();

export const  CountProvider = (props) => {
  const {children} = props;
  const{deleteTask,countDeleteTask} = useState(0);
  const CountproviderValue = useMemo(()=>({deleteTask,countDeleteTask}),[countDeleteTask])
  
  return(
    <CountContext.Provider value={CountproviderValue}>
      {children}
    </CountContext.Provider>
  )

}