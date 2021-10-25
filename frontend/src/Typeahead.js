import { useState } from "react";
import "./styles.css";

function Typeahead(){

  const [stores, setStores] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
    const userInput = event.target.value;

    if (userInput === "") {
      setStores([])
    } else {
      const fetchURL = 'http://localhost/backend/stores?search=' + userInput;
      fetch(fetchURL)
        .then(response => response.json())
        .then(data => setStores(data.stores));
    }
  }


  function listClick(event) {
    const clickedName = event.target.getAttribute('storename');
    console.log('clicked: ', clickedName);
    setInput(clickedName);
    setStores([]);
  }


  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="searchBox"
        value={input}

      />

      <div>
        {stores?.map((store) =>
          <ul className="suggestions">
            <li storename = {store.name} onClick = {listClick}>
              {store.name}
            </li>
          </ul>
        )}
      </div>

    </div>
  )

}
export default Typeahead;
