import React from "react";
import CoffeCard from "./coffecard";

const DisplayProducts = ({products, whenPostSuccess, match}) => {
    const cards = products.map(data => (
        <CoffeCard
            match={match}
            whenPostSuccess={whenPostSuccess}
            key={data._id}
            product={data}
        />
    ));

    return <div className="coffecard__container">{cards}</div>;
};

export default DisplayProducts;
