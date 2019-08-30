import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/coffeshop">Coffeshop</Link>
            <Link to="/about">About</Link>
        </header>
    );
};

export default Header;
