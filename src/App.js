import React from "react";
import "./styles/App.scss";
import {BrowserRouter as Router} from "react-router-dom";

import Header from "./components/header";
import Routing from "./routes/routing";
import Footer from './components/footer';
const App = () => {
    return (
        <div className="App">
            <Router>
                    <Header />
                    <Routing  />
                    <Footer/>
            </Router>
        </div>
    );
};

export default App;
