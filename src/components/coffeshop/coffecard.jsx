import React from "react";
import {deleteRequest} from "../../functions/fetch";

const CoffeCard = ({product, deleteProduct, whenPostSuccess}) => {
    return (
        <div className="coffecard">
            <div className="coffecard__wrapper">
                <h3>{product.name}</h3>
                <p>{product.size}</p>
                <p>{product.price}</p>
            </div>
            <button onClick={() => deleteRequest(product.id, whenPostSuccess)}>
                x
            </button>
        </div>
    );
};

export default CoffeCard;
