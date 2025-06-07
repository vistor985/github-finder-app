const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload; // Set the alert with the provided message and type
    case 'REMOVE_ALERT':
      return null; // Remove the alert by returning null
    default:
      return state; // Return the current state if no action matches
  }
};
export default alertReducer;
