import React from "react";
import './components/App.module.css';
import { Profile} from './components/Profile';
import { Details } from "./components/Details";
import { Metrics1 } from "./components/Metrics1";
import { Metrics2 } from "./components/Metrics2";
import { Metrics3 } from "./components/Metrics3";




function App() {
  return (
   <article>

     <Profile />
     <Details />
    <Metrics1 />
    <Metrics2 />
    <Metrics3 />
    
   </article>

           
  );
};

export default App;
