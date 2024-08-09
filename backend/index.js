const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;
const mongoDB = require("./db");

mongoDB();

app.use(cors({ origin: 'http://localhost:3000' })); // Use the cors middleware with specific origin

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
