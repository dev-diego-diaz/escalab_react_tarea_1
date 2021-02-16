import React, {Fragment} from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';

// Components
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

// Pages

import HomePage from './pages/homepage/homepage.component';
import Bluray from './pages/bluray/bluray.component';
import Contacto from './pages/contacto/contacto.component';
import Vinilos from './pages/vinilos/vinilos.component';



const App = () => (
    
  <Fragment>
      <BrowserRouter>
      <Header/>
          <Switch>
            <Route exact path="/" activeClassName="active" component={HomePage} />
            <Route path="/bluray" component={Bluray} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/vinilo" component={Vinilos} />
          </Switch>
      </BrowserRouter>
    <Footer />
  </Fragment>

);

export default App;
