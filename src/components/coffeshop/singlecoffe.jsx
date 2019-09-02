import React, {useEffect, useState} from "react";

import {Route} from "react-router-dom";

import Loader from "../../loader/loader";

import {fetchSpecificCoffe, updateRequest} from "../../functions/fetch.jsx";

// Holder for Page, but default exported, holds Coffe.
const SingeCoffe = ({data, match}) => {
    return (
        <div>
            <Route path={`${match.path}/:id`} component={Coffe} />
        </div>
    );
};

export default SingeCoffe;

// Main Component
const Coffe = ({match, history}) => {
    const [coffeProduct, setCoffeProduct] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrize] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [info, setInfo] = useState("");

    const whenPostSuccess = json => {
        if (json.success || json.status === 200)
            fetchSpecificCoffe(match, setCoffeProduct);
    };

    useEffect(
        () => {
            fetchSpecificCoffe(match, setCoffeProduct);
        },
        [match]
    );

    const toBack = () => history.goBack();

    const submit = id => {
        updateRequest(name, size, price, imgURL, info, id, whenPostSuccess);
        setIsEditing(false);
    };

    const letsEdit = data => {
        setIsEditing(true);
        setName(data.name);
        setSize(data.size);
        setPrize(data.price);
        setImgURL(data.imgURL);
        setInfo(data.info);
    };

    const renderSingleCoffe = coffeProduct.map(coffe => {
        if (isEditing)
            return (
                <div key={coffe._id} className="singleCoffe__container">
                    <div className="img_container">
                        <img src={coffe.imgURL} alt={coffeProduct.name} />
                    </div>
                    <div className="form_wrapper">
                        <div className="name">
                            <input
                                type="text"
                                placeholder="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>

                        <div className="picture">
                            <input
                                type="text"
                                placeholder="Link an image"
                                value={imgURL}
                                onChange={e => setImgURL(e.target.value)}
                            />
                        </div>

                        <div className="priceAndSize">
                            <input
                                type="text"
                                placeholder="price"
                                value={price}
                                onChange={e => setPrize(e.target.value)}
                            />

                            <select
                                value={size}
                                onChange={e => setSize(e.target.value)}
                            >
                                <option disabled hidden value="" />
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="big">big</option>
                            </select>
                        </div>

                        <textarea
                            value={info}
                            onChange={e => setInfo(e.target.value)}
                            placeholder="Add Info"
                        />
                        <button onClick={() => submit(coffe._id)}>Save</button>
                        <button onClick={() => setIsEditing(false)}>
                            Cancel
                        </button>

                        <button onClick={toBack}>Go Back</button>
                        <div />
                    </div>
                </div>
            );
        else {
            return (
                <div key={coffe._id} className="singleCoffe__container">
                    <div className="img_container">
                        <img src={coffe.imgURL} alt={coffeProduct.name} />
                    </div>
                    <div>
                        <h3>{coffe.name}</h3>
                        <p>price: {coffe.price}</p>
                        <p>size :{coffe.size}</p>
                        <p>
                            info:
                            <br /> {coffe.info}
                        </p>
                    </div>
                    <button onClick={() => letsEdit(coffe)}>Edit</button>
                    <button onClick={toBack}>Go Back</button>
                    <div />
                </div>
            );
        }
    });

    return (
        <div className="singleCoffe">
            {coffeProduct.length === 0 ? <Loader /> : renderSingleCoffe}
        </div>
    );
};
