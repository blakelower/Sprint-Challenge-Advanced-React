import React from "react";
import "./App.css";
import Playlist from "./component/Playlist";
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Womens soccer!</h1>
      <h2>Scroll to the bottom to toggle dark mode</h2>
      <Playlist />
      <Navbar/>
    </div>
  );
}

export default App;
