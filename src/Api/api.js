import axios from "axios";

export const whatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: "df74d63bff20d32a328612b49b13711c",
  },
});

export const whatherApiDays = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/onecall",
  params: {
    appid: "df74d63bff20d32a328612b49b13711c",
    exclude: "hourly,minutely",
  },
});
