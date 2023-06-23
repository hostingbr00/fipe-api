require("dotenv").config();
const { MongoClient } = require("mongodb");

// Configs
const dbURI = process.env.DB_URI || "";
const dbName = process.env.DB_NAME || "";
const DEBUG = Boolean(process.env.DEBUG === "true" || false) || false;

// Connection test
async function testDatabaseConnection() {
  try {
    // Create a new MongoDB client
    const client = new MongoClient(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Connect to the MongoDB server
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Log a success message if the connection is established
    console.log("Database connection successful!");

    // Perform any additional tests or operations here

    // Disconnect from the MongoDB server
    await client.close();
  } catch (error) {
    // Log an error message if the connection fails
    console.error("An error occurred while testing the database connection:", error);
  }
}

// Run the test
testDatabaseConnection();
