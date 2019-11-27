const fs = require('fs');
const express = require('express');
const router = express.Router();
let headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json"
}

router.get('/', (req, res) => {
    fs.readdir(req.query.path, (err, files) => {
        if (err) return err;
        files = files.filter(file => !file.includes('.'));
        res.set(headers);
        res.json(files);
    })
})

module.exports = router;