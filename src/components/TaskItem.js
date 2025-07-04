import React from 'react';

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`} id={`task-${task.id}`}>
      <div className="task-left">
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div className="task-content">
          <h4>{task.title}</h4>

          {task.description && <p>{task.description}</p>}

          {task.dueDate && (
            <p className={`due-date ${getDueClass(task.dueDate)}`}>
              <strong>Due:</strong>{' '}
              {new Date(task.dueDate).toLocaleDateString()}
              <span className="badge">{getDueLabel(task.dueDate)}</span>
            </p>
          )}

          <small>{new Date(task.createdAt).toLocaleString()}</small>
        </div>
      </div>

      <div className="task-actions">
        <button className="edit-btn" onClick={onEdit}>✏️</button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>✖</button>
      </div>
    </div>
  );
}

function getDueLabel(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const diff = (due.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24);

  if (diff < 0) return 'Overdue';
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Tomorrow';
  return '';
}

function getDueClass(dueDate) {
  const today = new Date();
  const due = new Date(dueDate);
  const diff = (due.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0)) / (1000 * 60 * 60 * 24);

  if (diff < 0) return 'overdue';
  if (diff === 0) return 'today';
  if (diff === 1) return 'tomorrow';
  return '';
}

export default TaskItem;
