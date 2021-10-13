import express from 'express';

const app = express(),
  PORT = 4000;

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
