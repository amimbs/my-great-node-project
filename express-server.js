const express = require('express');
const app = express();

let students = {
    2021: [
        'juan',
        'carlos',
        'jose'
    ],
    2022: [
        'zach',
        'andy',
        'shannon',
        'monique',
        'sarah',
        'avery',
        'jessica',
        'taylor',
        'kleveland',
        'kyler'
    ]
}

app.use(express.json());

app.post('/todos', (req, res) => {
    console.log({message: "received", body: req.body});
    res.json({message: "received", body: req.body});
})

// get is the METHOD, /foo is the ENDPOINT, req and res are the PARAMETERS. Whole thing is a call back function
app.get('/foo', (req, res) => {
    res.send('thank you for visting foo.')
});

// // node express-server.js

// // to test on postman localhost:3000/foo

app.get('/api/breeds/image/random', (req, res) => {
    console.log(req);
    console.log(res);
    res.json(
        {
            "message": "dogImage",
            "status": "success"
        }
    )
})

app.get("/route-parameters/cohort/:year", (req, res) => {
    // localhost:3000/route-parameters/cohort/2021
    console.log(req.params)
    res.json({message: `I study at DigitalCrafts ${req.params.year} Cohort`, students: students[req.params.year]})
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('Port 3000 is listening . . .')
})

// localhost:3000/api/breeds/image/random