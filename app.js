const express = require('express');
const app = express();

app.use(express.json());

// const cors = require('cors');
// app.use(cors());  //comment this to understand preflight request

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.options("/testPOST", (req, res) => {
    console.log("at preflight");
    // res.set('Access-Control-Allow-Origin', '*');
    // res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send();
});

app.get('/testGET', (req, res) => {
    // console.log(req.body);
    res.json({
        status: "success"
    })
})

app.post('/testPOST', (req, res) => {
    // console.log(req.body);
    res.json({ status: "success" });
})


app.listen(process.env.PORT || 4000, () => {
    console.log("started the server at port 4000 .....");
})