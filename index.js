// require("dotenv").config();
// const express = require('express');
// const bodyParser = require('body-parser')

// // Create server and call routes
// const app = express();
// const routes = require('./components/routes');
// app.use('/', routes);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // // Start server
// // const port = process.env.SERVER_PORT || 3000;
// // app.listen(port, () => {
// //   console.log(`Server running on port ${port}`);
// // });

// // Export app
// module.exports = app;


require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const DB = require('./components/db');

// Create server and call routes
const app = express();
const routes = require('./components/routes');
app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test database connection
async function testDatabaseConnection() {
  try {
    // Connect to the database
    await DB.connect();

    // Check if the connection is successful
    if (DB.isConnected()) {
      console.log('Database connection successful!');
    } else {
      console.log('Unable to establish a database connection.');
    }

    // Disconnect from the database
    await DB.disconnect();
  } catch (error) {
    console.error('An error occurred while testing the database connection:', error);
  }
}

// // Start server and test database connection
// const port = process.env.SERVER_PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
//   testDatabaseConnection();
// });

// Export app
module.exports = app;
