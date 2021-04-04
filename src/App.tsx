import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import Gallery from './components/Gallery/Gallery';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Scholership from './components/Scholership/Scholership';
import Donation from './components/Donation/Donation';
import Dashboard from './components/Dashboard/Dashboard';
import ClientForm from './components/ClientForm/ClientForm';
import ProductForm from './components/ProductForm/ProductForm';
import TestStandardForm from './components/TestStandardForm/TestStandardForm';
import LocationForm from './components/LocationForm/LocationForm';
import CertificateForm from './components/CertificateForm/CertificateForm';

library.add(faFacebook)

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <div>
              <Route exact path="/" component={Main} />
              <Route exact path="/register" component={Registration} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path="/contactUs" component={ContactUs} />
              <Route exact path="/scholership" component={Scholership} />
              <Route exact path="/donate" component={Donation} />
              <Route exact path="/dashboard" component={Dashboard} />

              <Route exact path="/client" component={ClientForm} />
              <Route exact path="/product" component={ProductForm} />
              <Route exact path="/test_standard" component={TestStandardForm} />
              <Route exact path="/location" component={LocationForm} />
              <Route exact path="/certificate" component={CertificateForm} />
            </div>
          <Footer />
        </Router>
  </div>
  );
}

export default App;
