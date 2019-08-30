import React from "react";
import {Route, Switch} from "react-router-dom";

import LandingPage from "../components/landingPage";
import About from "../components/about";
import CoffeShop from "../components/coffeshop/CoffeShop";

import SingleCoffe from "../components/coffeshop/singlecoffe";

const Routing = () => {
    return (
        <Switch>
            <Route exact={true} path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route path="/coffeshop" component={CoffeShop} />
            <Route path="/single" component={SingleCoffe} />
        </Switch>
    );
};

export default Routing;
