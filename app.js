// Using Express object
const express = require("express");

// Express app
const app = express();
app.use(express.json()); // Indicating we are gonna use JSON format

// Port from where we are gonna get to our app: localhost:3000
const port = 3000;

// Routs
// HTTP methods: GET, POST, PUT, DELETE
app.get("/v1/explorers", (req, res) => {
  console.log(`GET Explorers V1 API ${new Date()}`);
  const explorer1 = { id: 1, name: "Explorer_1" };
  const explorer2 = { id: 2, name: "Explorer_2" };
  const explorer3 = { id: 3, name: "Explorer_3" };
  const explorers = [explorer1, explorer2, explorer3];

  // HTTP code status:
  res.status(200).json(explorers);
});

// Initializig the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
