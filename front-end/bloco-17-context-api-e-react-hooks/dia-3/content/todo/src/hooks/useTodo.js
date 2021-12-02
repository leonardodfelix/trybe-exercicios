import { useState } from "react";

export default function useTodo(defaultValue) {
  const [list, setList] = useState(defaultValue);

  const addTask = (task) => {
    setList((list) => [...list, task]);
  }

  const removeTask = (task) => {
    setList((list) => {
      return list.slice(list.indexOf(task), 1)
    });
  }

  const clearTasks = () => setList([]); 

  return { list, addTask, removeTask, clearTasks };
}