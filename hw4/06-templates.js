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

async function getData(url) {
  // Add your code here

  // fetch the data from the url, store in json format
  try {
    var response = await axios.get(url);
    var data = await response.json;
  } catch (error) {
    console.log('Error: request failed', error);
    return;
  }

  // loop through the data and print the name and population to the html
  await for (i = 0; i < data.length; i++) {
    var country = data[i];
    var name = country.name;
    var population = country.population;

    // format population with commas
    population = population.toLocaleString();

    // create a new list item

    // add the list item to the list
  }
};

getData(url);

app.get('/', (req, res) => {
  // render pug template for the index.html file

  results = [
    'Countries and Capitals',
    'Most Populous Countries',
    'Regions of the World',
  ];

  res.render('page', {
    heading: 'Countries of the World',
    results: results,
  });
});

app.get('/capitals', (req, res) => {
  // map the output array to create an array with country names and capitals
  // check for empty data in the output array

  results = ['Afghanistan', 'Aland Islands', 'Albania'];

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
