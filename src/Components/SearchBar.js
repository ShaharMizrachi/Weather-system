import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { fetchWeather } from "../redux/actions/fetchWeather";
import { fetchFutureWeather } from "../redux/actions/fetchFutureWeather";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [submitButtonText, setSubmitButtonText] = useState("");
  const dispatch = useDispatch();
  const { weatherInfo, selectedCity } = useSelector((state) => ({ weatherInfo: state.weatherInfo, selectedCity: state.weatherInfo.find((c) => c.name === state.selectedCity) }));

  const onSubmit = () => {
    dispatch({ type: "CITY_SELECTED", payload: text });

    // why selectedCity is undefined in first time ask niv
    if (selectedCity) {
      console.log(selectedCity.coord.lat);
      dispatch(fetchFutureWeather(selectedCity.coord.lat, selectedCity.coord.lon));
    }

    const cityInTheList = weatherInfo.find((city) => city.name === text);

    if (cityInTheList) {
      if (new Date().getTime() - cityInTheList.time > 1000 * 60 * 60) {
        dispatch(fetchWeather(text));
      }
    } else if (text != "") {
      if (weatherInfo.length > 2) {
        // in case i have 3 diffrant cities in the list
        const deleteCity = weatherInfo.reduce((prev, city) => {
          // console.log(prev);
          return city.time < prev.time ? city : prev;
        }, weatherInfo[0]);
        // console.log(deleteCity);
        dispatch({ type: "DELETE_LAST_CITY", payload: deleteCity.name });
      }

      dispatch(fetchWeather(text)); // that is for post the city to the action fetchWeather that will active my reducer (return to it)
    }
    setText("");
  };

  const onCityClicked = (name) => {
    dispatch({ type: "CITY_SELECTED", payload: name });
  };

  return (
    <>
      <div className="Form">
        <TextField placeholder="Enter a City ..." onChange={(e) => setText(e.target.value)} value={text} className="TextField " variant="outlined" style={{ background: "white" }} />
        <Button
          variant="contained"
          onClick={onSubmit}
          style={{
            fontSize: "15px",
            backgroundColor: "red",
          }}
        >
          Submit
        </Button>
      </div>
      <div>
        {weatherInfo.map((city) => (
          <Button variant="outlined" key={city.name} onClick={() => onCityClicked(city.name)}>
            {city.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
