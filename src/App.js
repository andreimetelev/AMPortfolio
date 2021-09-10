import React from "react";
import './styles/App.css';
import Header from "./components/graphic/navigation/Header";
import Footer from "./components/graphic/sections/footer/Footer";
import Section from "./components/graphic/sections/Section";
import SectionTitle from "./components/graphic/sections/SectionTitle";
import SectionContent from "./components/graphic/sections/SectionContent";
import IntroPart from "./components/graphic/sections/intro/IntroPart";
import SectionBGImage from "./components/graphic/SectionBGImage/SectionBgImage";

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Section>
        <SectionBGImage/>
        <SectionTitle title={{title:'Hello I`m Andrei Metelev. Welcome to my website', objective:'Here I will talk about myself and my development experience.'}}/>
        <SectionContent>
          <IntroPart/>
        </SectionContent>        
      </Section>
      <Footer/>
      </div>
  );
}

export default App;
