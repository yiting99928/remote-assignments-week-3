const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, My Server')
});

router.get('/myName', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.send(name);
    } else {
        res.send(
            `<form action="/trackName" method="post">
            <label>Please enter your name:
            <input type="text" name="name" />
            </label>
            <button type="submit">Submit</button></form>`
        );
    }
});

router.post('/trackName', (req, res) => {
    res.cookie('username', req.body.name);
    console.log(req.body.name);
    res.redirect('/myName')
});

router.get('/trackName', (req, res) => {
    const name = req.cookies.username;
    const trackName = req.query.name;
    name == trackName ?
        res.send("username:" + trackName)
        : res.send('no username')
})


module.exports = router;
