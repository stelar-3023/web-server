const path = require('path');
const express = require('express');

const app = express();

// Define paths fro Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates');

//Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);

// Setup static directory to serve
app.use(express.static(publicPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Steve Larsen',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Steve Larsen',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'Steve Larsen',
    message: 'This is a help message',
  });
});

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
