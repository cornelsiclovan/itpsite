import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavigation from './shared/components/navigation/MainNavigation';
import Home from './home/pages/Home';
import Prices from './price/pages/Prices';
import Contact from './contact/pages/Contact';
import Footer from './shared/components/navigation/Footer';
import Telephone from './shared/components/navigation/Telephone';

let routes;

const App = () => {
    routes = (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/preturi" exact>
                <Prices />
            </Route>
            <Route path="/contact" exact>
                <Contact />
            </Route>
        </Switch>
    );

    return (
        <Router>
            <MainNavigation />
            <main>
                {routes}
            </main>
            <Footer />
            <Telephone />
        </Router>
    )
};

export default App;