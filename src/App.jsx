import React, { useState}from "react";
import ReactDOM from "react-dom";
import Header from "./Header.jsx";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import ActivityDetail from "./components/ActivityDetail.jsx";
import ActivityFeed from "./components/ActivityFeed.jsx";
import { callApi } from "./hooks/callApi.js";
import Navbar from "./components/Navbar.jsx";
import Archive from "./components/Archive.jsx";
import { Toaster } from "react-hot-toast";


const App = () => {
  const [data] = callApi();
  const [screen, setScreen] = useState("Home");

  return (
    <div className="container">
      <Header />
      {screen === "Home" && <ActivityFeed data={data} />}
      {screen === "Archive" && <Archive data={data} />}
      <Toaster
        containerStyle={{
          top: 150,
          
        }}
      />
      <Navbar setScreen={setScreen} screen={screen} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
