import { whatherApiDays } from "../../Api/api";

export const fetchFutureWeather = (lat, lon) => async (dispatch, getState) => {
  try {
    const { data } = await whatherApiDays.get("", { params: { units: "metric", lat: lat, lon: lon } });
    dispatch({ type: "FETCH_FUTURE_WEATHER", payload: data });
  } catch {
    dispatch({ type: "FETCH_FUTURE_WEATHER", payload: null });
  }
};
