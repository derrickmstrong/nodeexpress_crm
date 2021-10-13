import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express(),
  PORT = 4000;

routes(app);

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
