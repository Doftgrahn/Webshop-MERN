import React, {useEffect, useState} from "react";
import AddCoffe from "./addcoffe";
import DisplayProducts from "./displayproducts";

import {fetchAll} from "../../functions/fetch";

const CoffeShop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchAll(setProducts);
    }, []);

    const whenPostSuccess = json => {
        if (json.success || json.status === 200) fetchAll(setProducts);
    };

    return (
        <section>
        <AddCoffe whenPostSuccess={whenPostSuccess} />
            <DisplayProducts
                products={products}
                whenPostSuccess={whenPostSuccess}
            />
        </section>
    );
};

export default CoffeShop;
