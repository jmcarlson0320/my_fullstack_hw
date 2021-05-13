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
  // create an array with country names and capitals
  let results = [];
  data.forEach((country, index, data) => {
    results.push(country.name + ' - ' + country.capital);
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

  let results = [];
  data.forEach((country, index, data) => {
    if (country.population >= 50000000) {
      results.push([country.name, country.population]);
    }
  });

  // sort results by population
  results.sort((a, b) => {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return (a[1] > b[1]) ? -1 : 1;
    }
  });

  // build array of strings to render
  let results_str = [];
  results.forEach((filtered_countries, index, data) => {
    results_str.push(filtered_countries[0] + ' - ' + filtered_countries[1].toLocaleString());
  });

  res.render('page', {
    heading: 'Most Populous Countries',
    results: results_str,
  });
});

app.get('/regions', (req, res) => {
  // reduce the output array in a resulting object that will feature the numbers of countries in each region
  // disregard empty data from the output array

  // object to hold key/value pairs
  // key: region
  // value: count
  let results = {};
  data.forEach((country, index, data) => {
    // if new region, init with a count of 1
    if (!results[country.region]) {
      results[country.region] = 1;
    }

    // increment the region's count
    results[country.region] += 1;
  });

  // convert the object to an array of strings
  let results_str = [];
  for (var key in results) {
    let val = results[key];
    if (key)
      results_str.push(key + ' - ' + val);
  }

  res.render('page', {
    heading: 'Regions of the World',
    results: results_str,
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
