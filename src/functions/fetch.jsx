//General Fetch
export const fetchAll = setState => {
    let url = "/api/coffe";
    if (process.env.NODE_ENV !== "production") {
        console.log("Running in DEV MODE on PORT 3001");
        url = "http://localhost:1337/api/coffe";
    } else {
        console.log("Running in PRODUCTION MODE");
    }
    fetch(url)
        .then(resp => resp.json())
        .then(respjson => {
            setState(respjson);
        });
};

//Post Request , needs 4 params to work. 3 states and one function
export const postRequest = (name, size, price, imgURL, whenPostSuccess) => {
    let url = "/api/coffe";
    if (process.env.NODE_ENV !== "production") {
        console.log("Running in DEV MODE on PORT 3001");
        url = "http://localhost:1337/api/coffe";
    } else {
        console.log("Running in PRODUCTION MODE");
    }
    const settings = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            size,
            price,
            imgURL
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
    console.log(id);
    let url = "/api/coffe";
    if (process.env.NODE_ENV !== "production") {
        console.log("Running in DEV MODE on PORT 1337");
        url = "http://localhost:1337/api/coffe";
    } else {
        console.log("Running in PRODUCTION MODE");
    }
    const settings = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Origin": "*"
        },
        body: JSON.stringify({
            id
        })
    };
    fetch(url, settings)
        .then(resp => {
            console.log("Deleted");
            whenPostSuccess(resp);
        })
        .catch(err => console.error("Something went wrong", err));
};
