fetch("http://localhost:4000/testPOST", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'name': 'chiranjib'
    }),
    mode: 'cors'
})
    .then(res => res.json())
    .then(data => console.log(data));