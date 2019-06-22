// Dependencies
var express = require("express");
var path = require("path");

// Configure the Express application
var app = express();
var PORT = process.env.PORT || 3000;

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Configure express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Configure express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static("pulbic"));

// app.use(htmlRoutes(connection));
// app.use(apiRoutes(connection));

// Start listening on PORT
app.listen(PORT, () => console.log(`Go to FriendFinder app: ` + `http://localhost:${PORT}`));
