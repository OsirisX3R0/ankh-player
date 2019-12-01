const fs = require('fs');
const express = require('express');
const router = express.Router();
const ffmetadata = require("ffmetadata");

let headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json"
}

router.post('/', (req, res) => {
    var tracks = [];
    req.body.songs.forEach(song => {
        ffmetadata.read(song, (err, data) => {
            res.set(headers);
            if (err) console.error(err);
            var item = data;
            item.path = song;
            tracks.push(song);
        })
    })
    
    res.json(tracks);
    
})

module.exports = router;