// Main App file Dict.js
// Meaning Checker 

import { useState } from "react";
import ListDetails from "./ListDetails";
import axios from "axios";
import "./Dict.css";

function Dict() {
  const [keyWord, setkeyWord] = useState("");
  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en";

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({ e });
    }
  }

  function handleClear(e) {
    setkeyWord("");
    setResult(null);
  }
  return (
    <div className="mainclass">
      <h2>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1265/1265907.png" alt="logo-dict"
          width="30px"
        />
       Meaning Checker
      </h2>
      <input
        className="inputfield"
        value={keyWord}
        onChange={(e) => setkeyWord(e.target.value)}
      />
      <button className="button" onClick={handleSearch} type="submit">
        Search
      </button>

      <button
        className="button"
        disabled={!result}
        type="submit"
        onClick={handleClear}
      > Clear
      </button>
      <div>{result && <ListDetails {...{ result }} />}</div>
    </div>
  );
}

export default Dict;
