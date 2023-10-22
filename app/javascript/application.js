// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Gretting from "./controllers/Gretting.js";

function App() {
  // return (<h1>Hello World!a</h1>);
  return (
    <>
      <Gretting />      
    </> 
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);