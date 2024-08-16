const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Route that logs the request body and query parameters
app.post('/', (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Query Params:', req.query);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
