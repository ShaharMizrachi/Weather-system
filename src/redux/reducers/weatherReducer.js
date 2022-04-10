const weatherInfo = (state = [], action) => {
  var time = new Date().getTime();
  //check the action type
  if (action.type === "FETCH_WEATHER" && action.payload !== null) {
    return [...state, { ...action.payload, time }];
  } else if (action.type === "DELETE_LAST_CITY") {
    // console.log([...state.filter((city) => city.name !== action.payload)]);
    return [...state.filter((city) => city.name !== action.payload)]; // problem not working
  }

  return state;
};

export default weatherInfo;

// ask niv about taht
