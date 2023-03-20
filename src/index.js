import ReactDOM from "react-dom/client";
import React from "react";
import Counter from "./components/counter.jsx";
import Comic from "./components/comic.jsx"
import './styles.css';

const App = () => {
  return <>
    <h1 className="heading"> app! </h1>
    <div className="content">
      <Counter />
      <Comic />
    </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);