import React, { useEffect, useState } from 'react';

const TodoNotify = () => {
  const [hasTodo, setHasTodo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date().toISOString().slice(0, 10);
      const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
      const upcomingTodos = storedTodos.filter(todo => todo.tododate === currentDate);

      if (upcomingTodos.length > 0) {
        upcomingTodos.forEach(todo => {
          alert(`You have a todo: "${todo.title}" due today!`);
        });
        setHasTodo(true);
      } else {
        setHasTodo(false);
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default TodoNotify;