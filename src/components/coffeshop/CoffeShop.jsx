import React, {useEffect, useState} from "react";
import AddCoffe from "./addcoffe";
import DisplayProducts from "./displayproducts";

import Loader from "../../loader/loader";

import {fetchAll} from "../../functions/fetch";

const CoffeShop = ({match}) => {
    const [products, setProducts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            fetchAll(setProducts);
        }

        return () => (isSubscribed = false);
    }, []);

    const whenPostSuccess = json => {
        if (json.success || json.status === 200) fetchAll(setProducts);
    };

    const toggle = () => setIsVisible(!isVisible);

    const hideForms = () => setIsVisible(false);

    return (
        <section>
            <button className="showform" onClick={toggle}>
                Show Form
            </button>
            <AddCoffe
                toggle={toggle}
                hideForms={hideForms}
                isVisible={isVisible}
                whenPostSuccess={whenPostSuccess}
            />

            {products.length === 0 ? (
                <Loader />
            ) : (
                <DisplayProducts
                    products={products}
                    whenPostSuccess={whenPostSuccess}
                    match={match}
                />
            )}
        </section>
    );
};

export default CoffeShop;
