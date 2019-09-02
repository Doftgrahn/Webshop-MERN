import React, {useState} from "react";
import {postRequest} from "../../functions/fetch";

const AddCoffe = ({whenPostSuccess, isVisible, hideForms}) => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrize] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [info, setInfo] = useState("");

    const [valid, setValid] = useState(true);

    const submit = () => {
        if (name && size && price && imgURL && info) {
            setValid(true);
            postRequest(name, size, price, imgURL, info, whenPostSuccess);
            setName("");
            setSize("");
            setPrize("");
            setImgURL("");
            setInfo("");
            hideForms();
        } else {
            setValid(false);
        }
    };

    const resetFormError = () => {
        setValid(true);
        hideForms();
    };

    return (
        <section className={`addCoffe ${isVisible ? "active" : "notActive"}`}>
            <button onClick={resetFormError} className="close_btn">
                Close
            </button>
            <div className="addCoffe__wrapper">
                <h3>Add Your Coffe!</h3>
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
                <div className="btn_container">
                    {!valid ? (
                        <span className="error">Please fill in form...</span>
                    ) : null}
                    <button onClick={submit}>Send</button>
                </div>
            </div>
        </section>
    );
};

export default AddCoffe;
