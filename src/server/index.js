const FormData = require('form-data');
const fetch = require("node-fetch");
const dotenv = require("dotenv");
const path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

dotenv.config();
const app = express()

app.use(express.json());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('Example app listening on port 8080!')
})

app.post('/analyze', function (req, res) {
    const sentence = req.body.sentence;
    if (!sentence) res.status(422).json({ error: "sentence is expected in request body"});

    const formData = new FormData();
    formData.append("key", process.env.API_KEY);
    formData.append("txt", sentence);
    formData.append("lang", "en");
    fetch("https://api.meaningcloud.com/sentiment-2.1", {
        method: "POST",
        body: formData,
    })
    .then(res => res.json())
    .then((data) => res.json({ data }))
    .catch(error => res.status(500).json({ error: "Something went wrong"}));
})
