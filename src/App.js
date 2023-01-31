import React, { useContext } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainNavigation from './shared/components/navigation/MainNavigation';
import Home from './home/pages/Home';
import Prices from './price/pages/Prices';
import Contact from './contact/pages/Contact';
import Footer from './shared/components/navigation/Footer';
import Telephone from './shared/components/navigation/Telephone';
import Admin from './admin/pages/Admin';
import Auth from './user/Auth';
import { useAuth } from './hooks/auth-hook';
import { AuthContext } from './context/auth-context';
import ServiceEdit from './admin/pages/ServiceEdit';
import PriceEdit from './admin/pages/PriceEdit';
import ContactEdit from './admin/pages/ContactEdit';
import UpdateService from './admin/pages/UpdateService';
import UpdatePrice from './admin/pages/UpdatePrice';
import UpdateContact from './admin/pages/UpdateContact';
import UpdateTelephone from './admin/pages/UpdateTelephone';
import Meta from './home/components/Meta';

const App = () => {
    const { token, login, logout, userId} = useAuth();

    let routes;
   
    if(token) {
       
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
            <Route path="/auth" >
                <Auth />
            </Route>
            <Route path="/admin" exact>
                <Admin />
            </Route>
            <Route path="/editeaza_servicii" exact>
                <ServiceEdit />
            </Route>
            <Route path="/editeaza_servicii/:id" exact>
                <UpdateService />
            </Route>
            <Route path="/editeaza_preturi" exact>
                <PriceEdit />
            </Route>
            <Route path="/editeaza_preturi/:id" exact>
                <UpdatePrice />
            </Route>
            <Route path="/editeaza_contact" exact>
                <ContactEdit />
            </Route>
            <Route path="/editeaza_program/:id" exact>
                <UpdateContact />
            </Route>
            <Route path="/editeaza_telefon/:id" exact>
                <UpdateTelephone />
            </Route>
        </Switch>
        );
    } else {

        console.log("token" + token);
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
                <Route path="/auth">
                    <Auth />
                </Route>
            </Switch>
            );
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout
            }}
            >
            <Meta />
            <Router>
                <MainNavigation />
                <main>
                    {routes}
                </main>
                <Footer />
                <Telephone />
            </Router>
        </AuthContext.Provider>
    );
};

export default App;