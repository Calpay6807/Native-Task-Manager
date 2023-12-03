import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useContext, useReducer} from 'react';
import AsyncStorageKey from '../constants/AsyncStorageKey';

const initialState = {
  tasks: [],
};
const TaskContext = React.createContext(initialState);
const reducer = (state = {}, action) => {
  switch (action?.type) {
    case 'FETCH_TASK':
      return {...state, tasks: action.payload};
    case 'ADD_TASK':
      const tasks = [...state?.tasks, action.payload];
      AsyncStorage.setItem(AsyncStorageKey.tasks, JSON.stringify(tasks));
      return {...state, tasks};
    case 'DELETE_TASK':
      const taskDelete = state?.tasks?.filter(
        task => task.id !== action.payload,
      );
      AsyncStorage.setItem(AsyncStorageKey.tasks, JSON.stringify(taskDelete));

      return {
        ...state,
        tasks: taskDelete,
      };

    case 'UPDATE_TASK':
      const updateTask = state?.tasks?.map(task =>
        task.id === action.taskId ? {...task, ...action.payload} : task,
      );
      AsyncStorage.setItem(AsyncStorageKey.tasks, JSON.stringify(updateTask));

      return {
        ...state,
        tasks: updateTask,
      };

    case 'DELETE_ALL':
      AsyncStorage.setItem(JSON.stringify([]));
      return {
        ...state,
        tasks: [],
      };

    default:
      // statenin kendini dön
      return state;
  }
};
const TaskProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TaskContext.Provider value={[state, dispatch]}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskReducerContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('Usecontext must be used with a taskContext');
  }
  return context;
};

export default TaskProvider;
