import React, {useEffect, useState} from "react";

import Loader from "../loader/loader";

import {fetchAll} from "../functions/fetch";

const LandingPage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let isSubscribed = true;
        if (isSubscribed) {
            fetchAll(setImages);
        }
        return () => (isSubscribed = false);
    }, []);

    const getPictures = images.sort(s => 0.5 - Math.random()).map(e => (
        <div className="img_wrapper" key={e._id}>
            <img src={e.imgURL} alt={e.name} />
        </div>
    ));

    return (
        <main className="landingpage">
            <h1>Coffe Brew</h1>
            <p>Gives you that special brew-feeling.</p>
            <div className="img__container">
                {images.length === 0 ? <Loader /> : getPictures}
            </div>
        </main>
    );
};

export default LandingPage;
