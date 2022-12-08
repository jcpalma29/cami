import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/clouds.png"}
          className="App-logo"
          alt="logo"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World!!
        </a>
      </header>
    </div>
  );
}

export default App;
