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
                <div className="coffecard__wrapper-info">
                    <p><strong>size:</strong> {product.size}</p>
                    <p><strong>price:</strong> {product.price}</p>
                </div>
                <Link to={`/coffeshop/single/${product._id}`}>
                    Check out more about {product.name}
                </Link>
            </div>
            <button onClick={() => deleteRequest(product._id, whenPostSuccess)}>
                Remove
            </button>
        </div>
    );
};

export default CoffeCard;
