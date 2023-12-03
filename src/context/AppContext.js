import React, {useContext, useState} from 'react';
import showToast from '../utils/ToastUtils';

const TaskContext = React.createContext();

const TaskProvider = ({children}) => {
  const [tasks, setTask] = useState([
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      status: 'closed',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 11,
      id: 2,
      title: 'delectus aut autem',
      status: 'done',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 12,
      id: 3,
      title: 'delectus aut autem',
      status: 'open',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 13,
      id: 244,
      title: 'delectus aut autem',
      status: 'done',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 14,
      id: 3423,
      title: 'delectus aut autem',
      status: 'open',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 15,
      id: 2342342,
      title: 'delectus aut autem',
      status: 'done',
      startDate: new Date(),
      endDate: new Date(),
    },
    {
      userId: 17,
      id: 23432,
      title: 'delectus aut autem',
      status: 'open',
      startDate: new Date(),
      endDate: new Date(),
    },
  ]);
  const deleteTask = taskId => {
    setTask(prevTask => prevTask.filter(task => task.id !== taskId));
    showToast('error', 'Başarıyla Silindi');
  };
  const deleteAllTask = () => {
    setTask([]);
    showToast('error', 'Başarıyla Silindi');
  };
  const addTask = newTask => {
    console.warn('addTASK', newTask);
    showToast('success', 'Başarıyla Eklendi');
    setTask([...tasks, newTask]);
  };
  const updateTask = (taskId, data) => {
    setTask(prevTask =>
      prevTask.map(task => (task.id === taskId ? {...task, ...data} : task)),
    );
  };
  const contextValue = {
    tasks,
    addTask,
    deleteTask,
    updateTask,
    deleteAllTask,
  };

  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('Usecontext must be used with a taskContext');
  }
  return context;
};

export default TaskProvider;
