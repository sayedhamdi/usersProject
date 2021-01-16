import React,{useState} from "react";
import "./App.css";
import MainRouter from "./MainRouter";
import Navbar from "./components/Navbar/Navbar";


export default function App() {

  
  return (
      <div>
        <Navbar />
        <MainRouter />
      </div>
  );
}