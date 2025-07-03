import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Login from './components/Login';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { loadTasks, saveTasks } from './utils/localStorage';

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // 👇 Load user after initial mount
  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    setUser(savedUser);
    const storedTasks = loadTasks();
    setTasks(storedTasks);
    console.log('Initial localStorage:', storedTasks);
  }, []);

  // 👇 Save tasks when updated
  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
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
