// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Trade from './components/Trade';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Expert from './components/Expert';
import Chart from './components/Chart';
import Data from './components/Data';
import StockModule1 from './components/BegStock/StockModule1'; 
import StockVideos1 from './components/BegStock/StockVideos1'; 
import Chapter1 from './components/Module1/Chapter1';
import Chapter2 from './components/Module1/Chapter2';
import Chapter3 from './components/Module1/Chapter3';
import Chapter4 from './components/Module1/Chapter4';
import StockVideo2 from './components/BegStock/StockVideos2';
import StockVideo3 from './components/BegStock/StockVideos3';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trade" element={<Trade />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/stock-module" element={<StockModule1 />} />
        <Route path="/stock-videos" element={<StockVideos1 />} />
        <Route path="/chapter1" element={<Chapter1/>}/>
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter4" element={<Chapter4 />} />
        <Route path="/stock-video-2" element={<StockVideo2/>} />
        <Route path="/stock-video-3" element={<StockVideo3/>} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/data" element={<Data />} />

      </Routes>
     <Footer/>
    </Router>
  );
}

export default App;
