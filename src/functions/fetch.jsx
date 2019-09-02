//General Fetch
//Needs a parameter for which state to use.
export const fetchAll = setState => {
    let url = "/api/coffe";
    fetch(url)
        .then(resp => resp.json())
        .then(respjson => {
            setState(respjson);
        });
};

//Fetch for Specific Coffe-Types
// First parameter is match props sent from router (Param to query, that is set in SingeCoffe.jsx), second one is the SetState [Hook] that should be used to store value.

export const fetchSpecificCoffe = (match, setState) => {
    let url = `/api/coffe/${match.params.id}`;

    fetch(url)
        .then(resp => resp.json())
        .then(respjson => {
            setState(respjson);
        });
};

//Post Request , needs 5 params to work. 4 states and one function
export const postRequest = (
    name,
    size,
    price,
    imgURL,
    info,
    whenPostSuccess
) => {
    let url = "/api/coffe";
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            size,
            price,
            imgURL,
            info
        })
    };
    fetch(url, settings)
        .then(resp => resp.json())
        .then(respJSON => {
            console.log("Fetch POST Succeded");
            whenPostSuccess(respJSON);
        });
};

// Delete needs id and function to work( The functions gets new items )
export const deleteRequest = (id, whenPostSuccess) => {
    let url = "/api/coffe";

    const settings = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*"
        },
        body: JSON.stringify({
            _id: id
        })
    };
    fetch(url, settings)
        .then(resp => {
            console.log("Deleted");
            whenPostSuccess(resp);
        })
        .catch(err => console.error("Something went wrong", err));
};

export const updateRequest = (name,size, price,imgURL,info, _id, whenPostSuccess) => {
    let url = "/api/coffe";
    const settings = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            _id,
            name,
            size,
            price,
            imgURL,
            info
        })
    }

    fetch(url, settings)
        .then(resp => resp.json())
        .then((result) => {
            whenPostSuccess(result)
            console.log("Worked", result)})
        .catch(err => console.error("Didnt PUT", err));
};
