import "./App.css";
import { useState } from "react";
import image from "./pics/background.jpg";
import SearchBar from "./Components/SearchBar";
import { Provider } from "react-redux";
import Store from "./redux/store/store.js";
import WeatherBox from "./Components/WeatherBox";
import ListBoxWeather from "./Components/ListBoxWeather";

function App() {
  const [cityList, setCityList] = useState([{ city: "", units: "metric" }]);

  return (
    <Provider store={Store}>
      <div className="App" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}>
        <header className="App-header">
          <SearchBar />
        </header>
        <div>
          <WeatherBox />
        </div>
      </div>
    </Provider>
  );
}

export default App;
