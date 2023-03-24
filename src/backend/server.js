const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 8000;
const maxComics = 2752; // from most recent latest comic

const app = express();

app.use(cors());

// runs if http://localhost:8000/comic is hit
app.get('/comic', cors(corsOptions), async (_, res) => {
  const rand = Math.floor(Math.random() * maxComics);
  axios
    .get(`https://xkcd.com/${rand}/info.0.json`)
    .then(response => {
      res.send(response.data)
    })
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
