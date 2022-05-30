// Using Express object
const express = require("express");

// Express app
const app = express();
app.use(express.json()); // Indicating we are gonna use JSON format

// Port from where we are gonna get to our app: localhost:3000
const port = 3000;

// Endpoint
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

app.get("/v1/explorers/:id", (req, res) => {
  console.log(`GET by ID Explorers V1 API ${new Date()}`);
  const explorer1 = { id: 1, name: "Explorer_1" };
  // HTTP code status 2:
  res.status(200).json(explorer1);
});

app.post("/v1/explorers", (req, res) => {
  console.log(`POST Explorers V1 API ${new Date()}`);
  // Add logic to perssist
  console.log(req.body); // Request parameters
  res.status(201).json({ message: "Creado exitosamente" });
});

app.put("/v1/explorers/:id", (req, res) => {
  console.log(`PUT Explorers V1 API ${new Date()}`);
  // Add logic to update
  console.log(req.body); // Update parameters
  console.log(rea.params.id); // Query params
  res.status(200).json({ message: "Actualizado exitosamente" });
});

app.delete("/v1/explorers/:id", (req, res) => {
  console.log(`DELETE Explorers V1 API ${new Date()}`);
  // Add logic to delete the registry sent
  res.status(200).json({ message: "Actualizado exitosamente" });
});

// Initializig the app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
