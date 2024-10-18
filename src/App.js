import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import ContainerNav from './components/Nav/Navbar';
import ContainerHome from "./pages/Home";
import ContainerFooter from './components/Footer/Footer';
function App() {
  return (
    <Fragment>
      <ContainerNav/>
      <ContainerHome/>
      <ContainerFooter/>
    </Fragment>
  );
}

export default App;
