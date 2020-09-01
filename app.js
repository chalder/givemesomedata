const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.get('/', (req, res) => {
    console.log(req.body);
    res.json({
        status: "success"
    })
})

app.listen(process.env.PORT || 4000, () => {
    console.log("started the server at port 4000 .....");
})