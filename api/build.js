const fs = require('fs');
const express = require('express');
const router = express.Router();
const mm = require('music-metadata');

let headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Content-Type": "application/json"
}

router.post('/', (req, res) => {
    var tracks = [];
    var promises = [];

    req.body.songs.forEach(song => {
        var promise = mm.parseFile(song)
            .then(data => {
                data.path = song;
                tracks.push(data);
            })
            .catch(err => console.error(err))
            
        promises.push(promise)
    })

    Promise.all(promises)
        .then(res => {
            res.set(headers);
            res.json(tracks);
        })    
})

module.exports = router;