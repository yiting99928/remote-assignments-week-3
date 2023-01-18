const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const number = req.query.number;
    let result = 0;
    if (number == null) {
        result = "Lack of Parameter";
    } else if ((/(^[1-9]\d*$)/.test(number))) {
        for (i = 1; i <= number; i++) {
            result += i
        }
        result = `${result}`
    } else {
        result = "Wrong Parameter"
    }
    res.send(`Result : ${result}`)
});

module.exports = router;