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

    const renderSingleCoffe = coffeProduct.map(coffe => (
        <div key={coffe._id} className="singleCoffe__container">
            <div className="img_container">
                <img src={coffe.imgURL} alt={coffeProduct.name} />
            </div>
            <div>
                <h3>{coffe.name}</h3>
                <p>{coffe.price}</p>
                <p>{coffe.size}</p>
                <p>{coffe.info}</p>
            </div>
            <button onClick={toBack}>Go Back</button>

            <div />
        </div>
    ));

    return <div className="singleCoffe">{renderSingleCoffe}</div>;
};
