const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/student-login-registration')));

// Handle Angular routing, return all requests to the index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/student-login-registration/browser/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
