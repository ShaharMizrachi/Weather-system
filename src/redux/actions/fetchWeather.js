import { whatherApi } from "../../Api/api";

export const fetchWeather = (city) => async (dispatch, getState) => {
  try {
    const { data } = await whatherApi.get("", { params: { q: city, units: "metric" } });
    dispatch({ type: "FETCH_WEATHER", payload: data });
  } catch {
    dispatch({ type: "FETCH_WEATHER", payload: null });
  }
};
