const url = 'https://restcountries.eu/rest/v2/all';

async function getData(url) {
  // Add your code here

  // fetch the data from the url, store in json format
  try {
    var response = await fetch(url);
    var data = await response.json();
  } catch (error) {
    console.log('Error: request failed', error);
    return;
  }

  // loop through the data and print the name and population to the html
  for (i = 0; i < data.length; i++) {
    var country = data[i];
    var name = country.name;
    var population = country.population;

    // format population with commas
    population = population.toLocaleString();

    // create a new list item
    var entry = document.createElement('li');
    entry.innerText = name + ' - ' + population;

    // add the list item to the list
    document.getElementById('results').appendChild(entry);
  }
};

getData(url);
