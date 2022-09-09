import React, { useState}from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ActivityDetail from "./components/ActivityDetail.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import { callApi } from "./hooks/callApi.js";
import Navbar from "./components/Navbar.jsx";
import Archive from "./components/Archive.jsx";

const App = () => {
  const [data] = callApi();
  const [screen, setScreen] = useState("Home");
  console.log(screen)

  return (
    <div className="container">
      <Header />
      {screen === "Home" && <ActivityFeed data={data} />}
      {screen === "Archive" && <Archive data={data} />}

      <Navbar setScreen={setScreen} screen={screen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
