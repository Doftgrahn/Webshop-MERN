import React, {useEffect, useState} from "react";

import Loader from "../loader/loader";

import {fetchAll} from "../functions/fetch";

const LandingPage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        let fetch = fetchAll(setImages);
        return () => fetch;
    }, []);

    const getPictures = images.sort(s => 0.5 - Math.random()).map(e => (
        <div className="img_wrapper" key={e._id}>
            <img src={e.imgURL} alt={e.name} />
        </div>
    ));

    /*
    useEffect(
        () => {
             let interval =  setInterval(() => {
                setImages(images.sort(e => 0.5 - Math.random()));
            }, 10000);
            return () => clearInterval(interval);
        },
        [images]
    );
    */

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
