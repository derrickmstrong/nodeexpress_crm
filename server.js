import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';

const app = express(),
  PORT = 4000;

// Connect mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Setup bodyParser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

routes(app);

// Serve static files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
