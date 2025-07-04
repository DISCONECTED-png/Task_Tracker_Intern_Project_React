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
  const [darkMode, setDarkMode] = useState(true);
  const [editingTask, setEditingTask] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('username');
    setUser(savedUser);
    const storedTasks = loadTasks();
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      saveTasks(tasks);
    }
  }, [tasks]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  const handleScrollToTask = (taskId) => {
    const el = document.getElementById(`task-${taskId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setSearchTerm('');
    }
  };

  if (!user) return <Login setUser={setUser} />;

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome, {user}!</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <div className="theme-toggle">
            <input
              id="theme-toggle"
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode((prev) => !prev)}
            />
            <label htmlFor="theme-toggle" className="swap">
              <span className="swap-on">🔆</span>
              <span className="swap-off">🌙</span>
            </label>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', margin: '1rem 0' }}>
        <input
          type="text"
          className="form-input"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {searchTerm && (
          <div className="search-dropdown">
            {tasks
              .filter(
                (task) =>
                  task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  (task.description &&
                    task.description.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .slice(0, 5)
              .map((task) => (
                <div
                  key={task.id}
                  className="search-option"
                  onClick={() => handleScrollToTask(task.id)}
                >
                  🔍 {task.title}
                </div>
              ))}
          </div>
        )}
      </div>

      {!editingTask && (
        <TaskForm
          setTasks={(newTaskCallback) =>
            setTasks((prev) => {
              const [newTask, ...rest] = typeof newTaskCallback === 'function' ? newTaskCallback(prev) : [newTaskCallback];
              const pending = rest.filter((t) => !t.completed);
              const completed = rest.filter((t) => t.completed);
              return [newTask, ...pending, ...completed];
            })
          }
          editingTask={null}
          setEditingTask={setEditingTask}
        />
      )}

      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        setEditingTask={setEditingTask}
        searchTerm={searchTerm}
      />

      {editingTask && (
        <div className="modal-overlay">
          <div className="modal-content">
            <TaskForm
              setTasks={(newTaskCallback) =>
                setTasks((prev) => {
                  const [newTask, ...rest] = typeof newTaskCallback === 'function' ? newTaskCallback(prev) : [newTaskCallback];
                  const pending = rest.filter((t) => !t.completed);
                  const completed = rest.filter((t) => t.completed);
                  return [newTask, ...pending, ...completed];
                })
              }
              editingTask={editingTask}
              setEditingTask={setEditingTask}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
