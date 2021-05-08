const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// http://localhost:5000/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5000/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5000/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5000/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// for other routes, such as http://localhost:5000/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});

// Add your code here
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<p>This is the welcome page.</p>');
});

app.get('/redirect', (req, res) => {
  res.status(302);
  res.set({ 'Location': '/redirected' });
  res.send();
});

app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<p>You may have been redirected to this page.</p>');
});

app.get('/cache', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.set({ 'Cache-Control': 'max-age=86400' });
  res.send('<p>This resource was cached.</p>');
});

app.get('/cookie', (req, res) => {
  res.status(200);
  res.set({ 'Set-Cookie': 'hello=world' });
  res.set({ 'Content-Type': 'text/html' });
  res.send('<p>cookies... yummm</p>');
});

app.get('*', (req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>Status 404: Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
