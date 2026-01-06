const express = require('express');
const logger = require('./middlewares/logger');
const auth = require('./middlewares/auth');
const timer = require('./middlewares/timer');
const errorHandler = require('./middlewares/errorHandler');
const secureRoutes = require('./routes/secureRoutes');

const app = express();

app.use(express.json());
app.use(logger);
app.use(timer);

// Protected routes
app.use('/secure', auth, secureRoutes);

// Error handler (LAST)
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
