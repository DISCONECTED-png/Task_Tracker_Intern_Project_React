import { useState } from "react";
import {v4 as uuid} from 'uuid';
function TaskForm({setTasks}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

const handleSubmit = (e) =>{
    e.preventDefault();
    const newTask = {
        id: uuid(),
        title,
        description,
        completed : false,
        createdAt: new Date().toISOString()
    };
    setTasks((prev) => [newTask, ...prev]);
    setTitle('');
    setDescription('');
};
return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;