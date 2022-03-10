const express = require('express');
const app = express();

app.get("/hello-express/:first_name/:last_name", (req, res) => {
    // localhost:3000/hello-express/juan/mrad/
    console.log(req.params)
    res.json({
        "firstname": "Hunter",
        "lastname": "Biden"
    })
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('project started at port 3000')
})