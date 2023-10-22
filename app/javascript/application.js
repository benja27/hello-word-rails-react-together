// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import Gretting from "./controllers/Gretting.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./controllers/store";
import { Provider } from "react-redux";


function App() {  


  return (
    <div>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            {/* <Route path="/gretting" element={<Gretting />} /> */}
            {/* <Route path="/gretting" element={  <h1> hola mundo </h1> } /> */}
            {/* <Route path="/" element={ <h1> hola mundo </h1> } /> */}
          </Routes>
          <Gretting />      
        </BrowserRouter>
      </Provider>
    </div> 
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);