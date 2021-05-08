const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const routes = [
    '/attributes?hello=world&lorem=ipsum',
    '/items?first=1&second=2&third=3&fourth=4',
    '/characters?spongebob=squarepants&patrick=star&sandy=cheeks',
  ];

  // use the URL interface to work with URLs
  // source: https://developer.mozilla.org/en-US/docs/Web/API/URL
  let url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);

  let getRoutes = () => {
    let result = '';

    routes.forEach(
      (elem) => (result += `<li><a href="${elem}">${elem}</a></li>`)
    );

    return result;
  };

  let paramsToTable = (params) => {
    let table = '<table border=2>';
    // use for-each on params and build an html table
    params.forEach((val, key) => {
      // write row as raw string
      table = table + `<tr><td>${key}</td><td>${val}</td></tr>`;
    });
    table = table + '</table>';
    
    return table;
  };

  if (req.url === '/') {
    let routeResults = getRoutes();

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>Exercise 02</h1>`);
    res.write(`<ul> ${routeResults} </ul>`);
  }

  else if (url.pathname === '/attributes') {
    let params = url.searchParams;
    let table = paramsToTable(params);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Attributes</h1>');
    res.write(table);
    res.end();
  }

  else if (url.pathname === '/items') {
    let params = url.searchParams;
    let table = paramsToTable(params);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Items</h1>');
    res.write(table);
    res.end();
  }

  else if (url.pathname === '/characters') {
    let params = url.searchParams;
    let table = paramsToTable(params);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Characters</h1>');
    res.write(table);
    res.end();
  }

  else {
    console.log(`${req.method} - ${req.url}`);
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404: Page not found</h1>');
    res.end();
  }

  // Add your code here

  res.end();
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
