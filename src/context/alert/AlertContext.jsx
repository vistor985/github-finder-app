import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';
const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, type, timeout = 3000) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), timeout);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert, // Function to set an alert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
