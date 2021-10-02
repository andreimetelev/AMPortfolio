import React from "react";
import '../src/styles/App.css';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MyRouter from "./components/router/MyRouter";

       
function App() {
    
    return (
      <BrowserRouter>
      <Header/>
      <MyRouter/>
      <Footer/>
      </BrowserRouter>
  );
}

export default App;
