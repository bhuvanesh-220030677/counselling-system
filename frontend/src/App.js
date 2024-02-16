import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Councellor from './components/Councellor';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Visitor from './components/Visitor';
import Appointment from './components/Appointment';
import StickyFooter from './components/Footer';
import Contact from './components/Contact';
import FetchRegistrations from './components/Fetchregistrations';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/councellor" element={<Councellor />} />
          <Route path="/visitor" element={<Visitor />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path='/fetch-registrations' element={<FetchRegistrations/>} exact/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>
        <StickyFooter />
      </footer>
    </React.Fragment>
  );
}

export default App;
