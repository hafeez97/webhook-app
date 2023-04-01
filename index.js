const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Webhook App is running!');
});

app.post('/webhook', (req, res) => {
    console.log('Received a webhook request:', req.body);
    // handle the webhook request here
    console.log(req.body);
    res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Webhook App listening at http://localhost:${port}`);
});