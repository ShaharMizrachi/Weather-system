import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./WeatherBox.css";
import sun from "../pics/sun.png";
import cloud from "../pics/cloud.png";
import cloudy from "../pics/cloudy.png";
import rain from "../pics/rain.png";
import snow from "../pics/snow.png";
import storm from "../pics/storm.png";
import windy from "../pics/windy.png";
import Mist from "../pics/mist.png";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { fetchFutureWeather } from "../redux/actions/fetchFutureWeather";
import ListBoxWeather from "./ListBoxWeather";
import Typography from "@mui/material/Typography";

const WeatherBox = () => {
  const { selectedCity } = useSelector((state) => ({ selectedCity: state.weatherInfo.find((c) => c.name === state.selectedCity) }));
  const { weatherFutureReducer } = useSelector((state) => ({ weatherFutureReducer: state.weatherFutureReducer }));

  const [fixednumber, Setfixednumber] = useState(null);
  const [picSelector, setPicSelector] = useState("");

  const dispatch = useDispatch();

  const picSelectedWeather = () => {
    switch (selectedCity.weather[0].main) {
      case "Clouds":
        setPicSelector(cloud);
      case "Rain":
        setPicSelector(rain);
      case "Mist":
        setPicSelector(Mist);
      case "Clear":
        setPicSelector(cloudy);

      default:
        return;
    }
  };

  useEffect(() => {
    if (!selectedCity) return;
    picSelectedWeather();
    dispatch(fetchFutureWeather(selectedCity.coord.lat, selectedCity.coord.lon));
  }, [selectedCity]);

  const shahar = () => {
    // console.log(weatherFutureReducer.daily[1].temp.day);
    console.log(selectedCity);
    return;
  };

  const bigBox = () => {
    if (selectedCity) {
      return (
        <div>
          <div className="row offset-2 col-9 mt-5" style={{ border: "2px solid #0dcaf0", padding: 20, borderRadius: "20px" }}>
            <Typography component={"span"}>
              {/* // ask niv about component  */}
              <div style={{ fontSize: "xx-Large", fontWeight: "bolder", display: "flex", justifyContent: "space-between" }}>
                {picSelector && <img className="weatherPic" src={picSelector} alt="my image" />}
                <div className="row offset-1">
                  {selectedCity.name}
                  <h2>{Math.round(selectedCity.main.temp)}°C</h2>
                  <h2>{selectedCity.weather[0].main}</h2>
                </div>
              </div>
            </Typography>
          </div>
          {picSelector && <ListBoxWeather />}
          {/* {shahar} */}
        </div>
      );
    }
  };

  return <div className="row col-12">{bigBox()}</div>;
};

export default WeatherBox;
