const express = require('express');
const app = express();

app.get("/route-parameters/cohort/:year", (req, res) => {
    // localhost:3000/route-parameters/cohort/2021
    res.send(
        `I study at DigitalCrafts ${req.params.year} Cohort`
    )
})

app.get('*', (req, res) => {
    res.send('404 not found')
})

app.listen(3000, () => {
    console.log('Port 3000 is listening . . .')
})