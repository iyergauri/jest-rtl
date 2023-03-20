const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 8000;
const app = express();

app.use(cors());
const corsOptions = {
  origin: "http://localhost:3000"
};

// This function runs if the http://localhost:8000/getData endpoint
// is requested with a GET request
app.get('/comic', cors(corsOptions), async (req, res) => {
  axios.get("https://xkcd.com/info.0.json")
    .then(response => {
      res.send(response.data)
    })
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
