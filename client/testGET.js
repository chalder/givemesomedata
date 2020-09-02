fetch("http://localhost:4000/testGET")
    .then(res => res.json())
    .then(data => console.log(data));