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
            `<form action="/myName" method="post">
            <label>Please enter your name:
            <input type="text" name="username" />
            </label>
            <button type="submit">Submit</button></form>`
        );
    }
});

router.post('/myName', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect(`/trackName`);
});

router.get('/trackName', (req, res) => {
    const name = req.cookies.username;
    const trackName = req.query.name;
    if (name==trackName) {
        res.send(trackName)
    } else{
        res.redirect('/myName')
    }
})

module.exports = router;
