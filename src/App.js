import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainNavigation from './shared/components/navigation/MainNavigation';

let routes;

const App = () => {
    routes = (
        <Switch>
            
        </Switch>
    );

    return (
        <Router>
            <MainNavigation />
        </Router>
    )
};

export default App;