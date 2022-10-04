import axios from 'axios';
import { useState, useCallback } from 'react';

const useInitialTodo = () => {
  const [initialTodo, setInitialTodo] = useState();
  const getTodo = useCallback(async () => {
    try {
      const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      const todoTitle = result.data.title;
      setInitialTodo(todoTitle);
    } catch (err) {
      alert('error');
    }
  }, []);

  return { getTodo, initialTodo };
};

export default useInitialTodo;
