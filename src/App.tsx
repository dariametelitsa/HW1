import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
// import sprite from './assets/images/icons-sprite.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
    </div>
  );
}

export default App;


     {/* <svg width='50' height='50'>
      <use xlinkHref={`${sprite}#${'css'}`}></use>
     </svg> */}
