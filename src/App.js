import "./App.css";
import React from "react";

function App() {
  let [count, setCount] = React.useState(+localStorage.getItem("number"));
  let local = localStorage.setItem("number", count);
  let onClickPlus = () => {
    setCount(count + 1);
  };
  let onClickMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="App">
      <div>
        <h2>счетчик</h2>
        <h1>{count}</h1>
        <div className="button">
          <button className="add" onClick={onClickMinus} disabled={count === 0}>
            {" "}
            --мминус
          </button>
          <button className="add" onClick={onClickPlus}>
            {" "}
            +плюс
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
