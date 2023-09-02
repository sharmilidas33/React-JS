import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" element={<News key="general" pageSize={6} country="in" category="General"/>}></Route>
        <Route exact path="/sports" element={<News key="sports" pageSize={6} country="in" category="Sports"/>}></Route>
        <Route exact path="/entertainment" element={<News key="entertainment" pageSize={6} country="in" category="Entertainment"/>}></Route>
        <Route exact path="/science" element={<News key="science" pageSize={6} country="in" category="Science"/>}></Route>
        <Route exact path="/health" element={<News key="health" pageSize={6} country="in" category="Health"/>}></Route>
        <Route exact path="/technology" element={<News key="technology" pageSize={6} country="in" category="Technology"/>}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

