import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import ContainerNav from './components/Nav/Navbar';
import ContainerHome from "./pages/Home"

function App() {
  return (
    <Fragment>
      <ContainerNav/>
      <ContainerHome/>
    </Fragment>
  );
}

export default App;
