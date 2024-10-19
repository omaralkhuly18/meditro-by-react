import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import ContainerNav from './components/Nav/Navbar';
import ContainerHome from "./pages/Home";
import ContainerAbout from "./pages/about";
import ContainerFooter from "./components/PartFooter/Footer";
function App() {
  return (
    <Fragment>
      <ContainerNav/>
      <ContainerHome/>
      <ContainerAbout/>
      <ContainerFooter/>
    </Fragment>
  );
}

export default App;
