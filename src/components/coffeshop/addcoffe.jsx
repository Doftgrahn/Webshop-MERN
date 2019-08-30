import React, {useState} from "react";
import {postRequest} from "../../functions/fetch";

const AddCoffe = ({whenPostSuccess}) => {
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [price, setPrize] = useState("");

    const submit = () => {
        postRequest(name, size, price, whenPostSuccess);
    };

    return (
        <section className="addCoffe">
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="size"
                value={size}
                onChange={e => setSize(e.target.value)}
            />
            <input
                type="text"
                placeholder="price"
                value={price}
                onChange={e => setPrize(e.target.value)}
            />

            <button
                disabled={name && size && price ? false : true}
                onClick={submit}
            >
                Send
            </button>
        </section>
    );
};

export default AddCoffe;
