import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Blogs from './pages/Blog';
import TestJs from './pages/Test';
import Services from './pages/Services';
import Layouts from './components/Layout/Layouts';
import { createBrowserRouter, createRoutesFromElements , Route, RouterProvider , Navigate} from 'react-router-dom';

// يجب أن يكون createRoutesFromElements (جمع Elements)
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* إعادة التوجيه من الجذر إلى /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      
      {/* المسارات الأخرى */}
      <Route path="/" element={<Layouts />}>
        <Route index path='/home' element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Reservation" element={<Reservation />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path='TestJs' element={<TestJs/>}/>
        <Route path='Services' element={<Services/>}/>
      </Route>
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
