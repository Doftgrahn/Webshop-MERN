import React, {useEffect, useState} from "react";

import {Route} from "react-router-dom";

const SingeCoffe = ({data, match}) => {
    return (
        <div>
            <Route path={`${match.path}/:id`} component={Coffe} />
        </div>
    );
};

export default SingeCoffe;

const Coffe = ({match}) => {
    const [coffeProduct, setCoffeProduct] = useState([]);
    useEffect(
        () => {
            let url = `/api/coffe/${match.params.id}`;
            if (process.env.NODE_ENV !== "production") {
                console.log("Running in DEV MODE on PORT 3001");
                url = `http://localhost:1337/api/coffe/${match.params.id}/`;
            } else {
                console.log("Running in PRODUCTION MODE");
            }
            fetch(url)
                .then(resp => resp.json())
                .then(respjson => {
                    setCoffeProduct(respjson);
                });
        },
        [match.params.id]
    );

    return (
        <div>
            <p>{coffeProduct.name}</p>
            <p>{coffeProduct.price}</p>
            <p>{coffeProduct.size}</p>
        </div>
    );
};
