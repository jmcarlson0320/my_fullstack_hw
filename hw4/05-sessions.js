const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

// Use the express-session module
app.use(session({
  'store': new session.MemoryStore(),
  'secret': 'a secret to sign the cookie',
  'resave': false,
  'saveUninitialized': false,
  'cookie': {
    'maxAge': 86400000
  }
}));

// this handles any url connected to /
app.get('/*', (req, res) => {
  // Add your code here
  res.status(200);
  res.set({ 'Content-Type': 'text/plain' });

  // start building the message
  msg = `Currently on route: ${req.path}\n\n`;

  // if no session, start a new "visited" list
  if (req.session.visited === undefined) {
    req.session.visited = [];
    req.session.visited.push(req.path);
    msg = msg + `Welcome to ${req.hostname}:${port}`
  // If there already exists a session, print path and add this req to the list
  } else {
    msg = msg + `Previously visited:\n\n`;
    req.session.visited.forEach(elem => {
      msg = msg + elem + '\n';
    });
    req.session.visited.push(req.path);
  }
  res.send(msg);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
