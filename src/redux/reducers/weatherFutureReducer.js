const weatherFutureReducer = (state = null, action) => {
  //check the action type
  if (action.type === "FETCH_FUTURE_WEATHER" && action.payload !== null) {
    return action.payload;
  }

  return state;
};

export default weatherFutureReducer;
