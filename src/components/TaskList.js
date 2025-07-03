import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({ tasks, setTasks, filter }) => {
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed') return task.completed;
        if (filter === 'pending') return !task.completed;
        return true;
    });
    const toggleTask = (id) => {
        setTasks((prev) =>
          prev.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          )
        );
      };
    const deleteTask = (id)=>{
        if(window.confirm('Are you sure you want to delete this task??')){
            setTasks((prev) => prev.filter((task) => task.id !== id));
        }
    }
  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  )
}

export default TaskList