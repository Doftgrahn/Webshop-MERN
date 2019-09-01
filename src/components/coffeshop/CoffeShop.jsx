import React, {useEffect, useState} from "react";
import AddCoffe from "./addcoffe";
import DisplayProducts from "./displayproducts";

import {fetchAll} from "../../functions/fetch";

const CoffeShop = ({match}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let fetch = fetchAll(setProducts);

        return () => fetch;
    }, []);

    const whenPostSuccess = json => {
        if (json.success || json.status === 200) fetchAll(setProducts);
    };

    return (
        <section>
            <h1>Add your Coffe!</h1>
            <AddCoffe whenPostSuccess={whenPostSuccess} />
            <DisplayProducts
                products={products}
                whenPostSuccess={whenPostSuccess}
                match={match}
            />
        </section>
    );
};

export default CoffeShop;
