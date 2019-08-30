import React from "react";
import {deleteRequest} from "../../functions/fetch";

import {Link} from "react-router-dom";

const CoffeCard = ({product, deleteProduct, whenPostSuccess, match}) => {
    return (
        <div className="coffecard">
            <div className="coffecard__wrapper">
                <div className="img__wrapper">
                    <img src={product.imgURL} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <p>size: {product.size}</p>
                <p>price: {product.price}</p>
                <Link to={`/coffeshop/single/${product.id}`}>
                    Check out more about {product.name}
                </Link>
            </div>
            <button onClick={() => deleteRequest(product.id, whenPostSuccess)}>
                <span aria-label="Delete" role="img">
                    ❌
                </span>
            </button>
        </div>
    );
};

export default CoffeCard;
