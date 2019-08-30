import React, {useState} from "react";
import {postRequest} from "../../functions/fetch";

const AddCoffe = ({whenPostSuccess}) => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrize] = useState("");
    const [imgURL, setImgURL] = useState("");

    const submit = () => {
        postRequest(name, size, price, imgURL, whenPostSuccess);
    };

    return (
        <section className="addCoffe">
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />

            <select value={size} onChange={e => setSize(e.target.value)}>
                <option disabled hidden value="" />
                <option value="small">small</option>
                <option value="medium">medium</option>
                <option value="big">big</option>
            </select>

            <input
                type="text"
                placeholder="price"
                value={price}
                onChange={e => setPrize(e.target.value)}
            />
            <input
                type="text"
                placeholder="Link an image"
                value={imgURL}
                onChange={e => setImgURL(e.target.value)}
            />
            <div className="btn_container">
                <button
                    disabled={name && size && price && imgURL ? false : true}
                    onClick={submit}
                >
                    Send
                </button>
            </div>
        </section>
    );
};

export default AddCoffe;
