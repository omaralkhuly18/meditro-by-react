import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import ContainerNav from './components/Nav/Navbar';
import ContainerHome from "./pages/Home";
import ContainerAbout from "./pages/about";
import ContainerFooter from "./components/PartFooter/Footer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter();
function App() {
  return (
    <Fragment>
      {/* <ContainerNav/>
      <ContainerHome/>
      <ContainerAbout/>
      <ContainerFooter/> */}
      <RouterProvider router={}/>
    </Fragment>
  );
}

export default App;
