import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import { loadTasks, saveTasks } from './utils/localstorage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('username'));
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="container">
      <h1>Welcome, {user}!</h1>
      <TaskForm setTasks={setTasks} />
    </div>
  );
}

export default App;