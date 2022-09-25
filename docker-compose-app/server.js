const { response } = require('express');
const express = require('express');
const redis = require('redis');

// Redis Client
const client = redis.createClient({
    host: "redis-server",
    port: 6379
});

// Redis Client Error
client.on("error", function (err) {
    console.log("Redis Client Error :: " + err);
})

const app = express();

// Number start 0
client.set("number", 0);

app.get('/', (req, res) => {
    client.get("number", (err, number) => {
        // Current Number + 1
        client.set("number", parseInt(number) + 1)
        res.send('페이지 접속 카운트 : ' + (parseInt(number) + 1));
    })
})

app.listen(8080);

console.log('Server is running');