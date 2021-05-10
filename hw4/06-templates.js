const axios = require('axios');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Use Pug as the templating engine
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// REST Countries URL
const url = 'https://restcountries.eu/rest/v2/all';

// Add your code here

// fetch the data from the site using axios
let data;
axios.get(url)
  .then(response => data = response.data)
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  // render pug template for the index.html file
  console.log(data[0]);

  // fill results with the names of the countries
  let results = [];
  data.forEach((country, index, data) => {
    results.push(country.name);
  });

  res.render('page', {
    heading: 'Countries of the World',
    results: results,
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  let results = [];
  data.forEach((country, index, data) => {
    results.push(country.name + ', ' + country.capital);
  });

  res.render('page', {
    heading: 'Countries and Capitals',
    results: results,
  });
});

app.get('/populous', (req, res) => {
  // filter the output array for the countries with population of 5ß0 million or more
  // sort the resulting array to show the results in order of population
  // map the resulting array into a new array with the country name and formatted population

  results = ['China', 'India', 'United States of America'];

  res.render('page', {
    heading: 'Most Populous Countries',
    results: results,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  results = ['Asia - 50', 'Europe - 53', 'Africa - 60'];

  res.render('page', {
    heading: 'Regions of the World',
    results: results,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
