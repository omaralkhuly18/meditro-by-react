import './App.css';
import React, { Fragment } from 'react';
import './index.css';
import Home from "./pages/Home";
import About from "./pages/about";
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Blogs from './pages/Blog';
import BlogsDetails from './pages/BlogsDetails';
import BlogDetailsSpicial from './pages/BlogDetailsSpicial';
// import TestJs from './pages/Test';
import Services from './pages/Services';
import Team from './pages/Team';
import PageNotFound from './pages/FAQ';
import Authentication from './pages/Authentication';
import DetailsPage from './components/Booking/DetailsPage';
import ServicesDetails from './pages/ServicesDetails';
import SearchBar from './components/ModealSearch/ModealSearch';
import Layouts from './components/Layout/Layouts';
import {Route , BrowserRouter , Routes , Navigate} 
from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* إعادة التوجيه من الجذر إلى /home */}
      <Route path="/" element={<Navigate to="/home" />} />
      
      {/* المسارات الأخرى */}
      <Route path="/" element={<Layouts />}>
        <Route index path='/home' element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Reservation" element={<Reservation />} />
        <Route path="Blog" element={<Blogs />} />
        <Route path="/BlogsDetails/:blogType" element={<BlogsDetails />} />
        <Route path="/BlogDetailsSpicial/:doctorName" element={<BlogDetailsSpicial />} />
        <Route path="/BlogDetailsSpicial/:doctorName" component={<BlogDetailsSpicial />} />
        <Route path='SearchBar' element={<SearchBar/>}/>
        <Route path='Services' element={<Services/>}/>
        <Route path='DetailsPage' element={<DetailsPage/>}/>
        <Route path='Team' element={<Team/>}/>
        <Route path='Authentication' element={<Authentication/>}/>
        <Route path='FAQ' element={<PageNotFound/>}/>
        <Route path="/servicesDetails/:serviceType" element={<ServicesDetails/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
