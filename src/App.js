import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";


import Page1 from './components/page1/page1';
import Page2 from "./components/page2/page2";
import Page3 from "./components/page3/page3";
import NavBar from './components/navbar/navbar';
import AboutMe from "./components/aboutme/aboutme";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="">

      <Page1 />
      <AboutMe/>
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
