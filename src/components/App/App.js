import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Accordion from '../Accordion/Accordion';

function App() {
  return (
  <React.StrictMode>
    <Header></Header>
    <Main></Main>
    <Accordion></Accordion>
  </React.StrictMode>
  );
}

export default App;
