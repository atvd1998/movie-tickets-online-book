const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');
const seatsRouter = require('./routes/seats');
const scheduleRouter = require('./routes/schedules');

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);
app.use('/seats', seatsRouter);
app.use('/schedules', scheduleRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
