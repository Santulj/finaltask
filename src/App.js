import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { SRLWrapper as SimpleReactLightbox } from "simple-react-lightbox";
import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Abonents from './Views/Abonents';
import Chat from './Views/Chat';
import Registration from './Views/Registration';
import Resident from './Views/Resident';
import AboutUs from './Views/AboutUs';
import Success from './Views/Success';


function App() {
  return (
    <div>
      <Router>
        <Header/>

          <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/abonents">
                    <Abonents/>
                </Route>
                <Route path="/resident">
                    <Resident/>
                  </Route>     
                <Route path="/chat">
                    <Chat/>
                </Route>
                <Route path="/registration">
                    <Registration/>
                </Route>
                <Route path="/success">
                    <Success/>
                </Route>
                <Route path="/about-us">
                    <AboutUs/>
                </Route>
            </Switch>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;