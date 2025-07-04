import React, { useState, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

function TaskForm({ setTasks, editingTask, setEditingTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const formRef = useRef(null);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setDueDate(editingTask.dueDate || '');
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formRef.current) {
      formRef.current.classList.remove('animate-submit');
      void formRef.current.offsetWidth;
      formRef.current.classList.add('animate-submit');
    }

    if (editingTask) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === editingTask.id
            ? { ...task, title, description, dueDate }
            : task
        )
      );
      setEditingTask(null);
    } else {
      const newTask = {
        id: uuid(),
        title,
        description,
        dueDate,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [newTask, ...prev]);
    }

    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit} ref={formRef}>
      <h2>{editingTask ? 'Edit Task' : 'Add a New Task'}</h2>

      {editingTask && (
        <button
          type="button"
          className="form-button cancel-button"
          onClick={() => setEditingTask(null)}
        >
          ✖ Cancel
        </button>
      )}

      <input
        className="form-input"
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="form-textarea"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

<label className="form-label" htmlFor="due-date">Due Date</label>
<input
  id="due-date"
  className="form-input"
  type="date"
  value={dueDate}
  onChange={(e) => setDueDate(e.target.value)}
  placeholder="Add a due date"
/>


      <button className="form-button" type="submit">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}

export default TaskForm;
