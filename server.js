import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express(),
  PORT = 4000;

// connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedToplogy: true,
});

routes(app);

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
