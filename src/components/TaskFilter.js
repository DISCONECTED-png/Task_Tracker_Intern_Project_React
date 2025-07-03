import React from 'react';

function TaskFilter({ filter, setFilter, tasks }) {
  const counts = {
    all: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length
  };

  return (
    <div className="filters">
      {['all', 'completed', 'pending'].map((type) => (
        <button
          key={type}
          className={filter === type ? 'active' : ''}
          onClick={() => setFilter(type)}
        >
          {type[0].toUpperCase() + type.slice(1)} ({counts[type]})
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;