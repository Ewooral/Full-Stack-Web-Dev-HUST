import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
function App() {
  return (
    <div className="app">
      {/* HEADER */}
      <Header />

      {/* APP BODY */}
      <div className="app__body">
        {/* SIDEBAR */}
        <Sidebar />
        {/* FEED */}
        {/* WIDGETS */}
      </div>
    </div>
  );
}

export default App;
