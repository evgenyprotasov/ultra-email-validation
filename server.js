const app = require('./app');
const port = process.env.PORT || 5000;

const server = app.listen(port, function() {
  console.log('Running server on port ' + port);
});
