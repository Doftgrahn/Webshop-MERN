import React from "react";
import "./styles/App.scss";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "./components/header";

import Routing from "./routes/routing";
const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Header />
                    <Routing  />
                </div>
            </Router>
        </div>
    );
};

export default App;
