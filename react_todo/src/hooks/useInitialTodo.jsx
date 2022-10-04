import axios from 'axios';
import { useState, useEffect } from 'react';

const useInitialTodo = () => {
  const [initialTodo, setInitialTodo] = useState();
  useEffect(
    () => async () => {
      try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        const todoTitle = result.data.title;
        setInitialTodo(todoTitle);
      } catch (err) {
        console.log('error');
      }
    },
    []
  );

  return [initialTodo];
};

export default useInitialTodo;
