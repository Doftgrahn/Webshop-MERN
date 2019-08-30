import React, {useEffect, useState} from "react";

import {Route} from "react-router-dom";

import {fetchSpecificCoffe} from "../../functions/fetch.jsx";

const SingeCoffe = ({data, match}) => {
    return (
        <div>
            <Route path={`${match.path}/:id`} component={Coffe} />
        </div>
    );
};

export default SingeCoffe;

const Coffe = ({match, history}) => {
    const [coffeProduct, setCoffeProduct] = useState([]);
    useEffect(
        () => {
            fetchSpecificCoffe(match, setCoffeProduct);
        },
        [match]
    );

    const toBack = () => history.goBack();

    return (
        <div className="singleCoffe">
            <div className="singleCoffe__container">
                <div className="img_container">
                    <img src={coffeProduct.imgURL} alt={coffeProduct.name} />
                </div>
                <div>
                    <h3>{coffeProduct.name}</h3>
                    <p>{coffeProduct.price}</p>
                    <p>{coffeProduct.size}</p>
                    <p>{coffeProduct.info}</p>
                </div>
                <div>
                    <button onClick={toBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};
