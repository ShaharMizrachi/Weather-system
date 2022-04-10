export const selectedCity = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WEATHER":
      return action.payload !== null ? action.payload.name : state;
    case "CITY_SELECTED":
      return action.payload;

    default:
      return state;
  }
};
