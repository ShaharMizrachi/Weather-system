import { ButtonGroup } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import "./ListBoxWeather.css";

const ListBoxWeather = () => {
  const { weatherFutureReducer } = useSelector((state) => ({ weatherFutureReducer: state.weatherFutureReducer }));

  console.log(weatherFutureReducer);

  // const days = () => {
  //   return weatherFutureReducer.daily.map((d, i) => {
  //     const index = i === weatherFutureReducer.daily.length - 1 ? weatherFutureReducer.daily.length - 1 : i + 1;
  //     return (
  //       <Typography className="child" component={"span"}>
  //         <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[index].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
  //         <h2>{Math.round(weatherFutureReducer.daily[index].temp.day)}°C</h2>
  //         <h2>{weatherFutureReducer.daily[index].weather[0].main}</h2>
  //       </Typography>
  //     );
  //   });
  // };

  const test = () => {
    console.log("hello world");
  };

  test();

  return (
    <div id="parent" className="row mt-5 offset-1">
      {weatherFutureReducer && (
        <React.Fragment>
          {/* {days()} */}
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[1].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[1].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[2].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[2].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[3].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[3].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[4].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[4].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[5].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[5].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[6].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[6].weather[0].main}</h2>
          </Typography>
          <Typography className="child" component={"span"}>
            <span style={{ fontSize: "Large", fontWeight: "bolder" }}>{new Date(weatherFutureReducer.daily[1].dt * 1000).toLocaleString("en-us", { weekday: "long" })}</span>
            <h2>{Math.round(weatherFutureReducer.daily[7].temp.day)}°C</h2>
            <h2>{weatherFutureReducer.daily[7].weather[0].main}</h2>
          </Typography>
        </React.Fragment>
      )}
    </div>
  );
};

export default ListBoxWeather;
