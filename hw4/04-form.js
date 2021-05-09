const path = require('path');
const parser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

app.use(express.static('public'));

app.use(parser.urlencoded({
  // i get a depreciation warning when this isn't set...
  extended: false
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/submit', (req, res) => {
  // build the response string
  let body = `Name: ${req.body.name}</br>`;
  body = body + `Email: ${req.body.email}</br>`;
  body = body + `Comments: ${req.body.comments}</br>`;

  // write a newsletter response depending on whether newsletter was clicked
  let newsletter = '';
  if (req.body.newsletter === 'on') {
    newsletter = 'Yes, sign me up for the newsletter.';
  } else {
    newsletter = 'No, thank you.';
  }

  body = body + 'Newsletter: ' + newsletter + '</br>';

  res.send(body);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
