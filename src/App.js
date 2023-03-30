import React, { useEffect } from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


import Page1 from './components/page1/page1';
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import NavBar from './components/navbar/navbar';
import AboutMe from "./components/aboutme/aboutme";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    
    
  const moveCursor = (e)=> {
    const cursorRounded = document.getElementById('rounded');
    const cursorPointed = document.getElementById('pointed');
    const mouseY = e.clientY;
    const mouseX = e.clientX;
     
    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    console.log("Ran")

  }

  useEffect(() => {

    
    window.addEventListener('mousemove', moveCursor)
  }, []);

  return (
    <div className="app">
      <div id="rounded" className="cursor rounded"></div>
      <div id="pointed" className="cursor pointed"></div>
      <Page1 />
      <AboutMe/>
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
