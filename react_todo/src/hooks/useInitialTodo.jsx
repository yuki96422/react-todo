import { useCallback, useState } from "react";
import axios from "axios";

const useInitialTodo = () => {
  const [initialTodo, setInitialTodo] = useState([]);
  
  const getInitialTodo = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setInitialTodo(res.data))
      .catch(() => console.log("error"));
  }, []);

  return { initialTodo, getInitialTodo };
};

export default useInitialTodo;
