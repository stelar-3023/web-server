const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.get('/help', (req, res) => {});

app.get('/weather', (req, res) => {
  res.send({
    location: 'Nashville',
    forecast: 'clear',
    temperature: '72',
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
