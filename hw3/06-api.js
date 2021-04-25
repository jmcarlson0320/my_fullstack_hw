const url = 'https://restcountries.eu/rest/v2/all';

async function getData(url) {
  // Add your code here

  // fetch the data from the url, store in json format
  var response = await fetch('https://restcountries.eu/rest/v2/all');
  var data = await response.json();

  // loop through the data and print the name and population to the html
  for (i = 0; i < data.length; i++) {
    var country = data[i];
    var name = country.name;
    var population = country.population;
    console.log(name + population);
  }
};

getData(url);
