import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from './pages/Contact';
import Layouts from './components/Layout/Layouts';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// يجب أن يكون createRoutesFromElements (جمع Elements)
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layouts/>}>
      <Route index path="/home" element={<Home />} />
      <Route  path="About" element={<About />} />
      <Route  path="Contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
