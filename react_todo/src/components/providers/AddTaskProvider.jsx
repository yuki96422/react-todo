import {createContext} from "react";

export const AddTaskContext = createContext({});

export const AddTaskProvider = (props) => {
  const {children} = props;
  const context = "provider_test"
  return(
    <AddTaskContext.Provider value={context}>
      {children}
    </AddTaskContext.Provider>
  )
}

