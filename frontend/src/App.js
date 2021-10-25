import React from "react";
import Typeahead from "./Typeahead"
import "./styles.css";
import { useState } from "react";
import { render } from "react-dom";

class App extends React.Component {

    render(){
      return <div>
        <h1>Store Search</h1>
        <Typeahead></Typeahead>
      </div>
    }

}
export default App;
