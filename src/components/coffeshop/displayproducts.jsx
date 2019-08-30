import React from "react";
import CoffeCard from "./coffecard";

const DisplayProducts = ({products, whenPostSuccess}) => {
    const cards = products.map(data => (
        <CoffeCard
            whenPostSuccess={whenPostSuccess}
            key={data.id}
            product={data}
        />
    ));

    return <div className="coffecard__wrapper">{cards}</div>;
};

export default DisplayProducts;
