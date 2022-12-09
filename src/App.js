import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button} from "react-bootstrap";
import Header from "./components/Header";
import { useTranslation } from "react-i18next"; 


function App() {

  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
