// Add your code here
function submitData(name,email) {
    return fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({"name": name,"email":email})
    })
    .then((req) => {return req.json()
    })
    .then((res) => {document.body.append(res.id)
    })
    .catch((err)=> {
        alert("Whoops!")
        document.body.append(err.message)
    })
}