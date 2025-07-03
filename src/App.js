import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { loadTasks, saveTasks } from './utils/localstorage';

function App() {
  const [user, setUser] = useState(localStorage.getItem('username'));
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

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
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} filter={filter} />
    </div>
  );
}

export default App;