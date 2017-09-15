const app = require('./app');

const port = process.env.PORT || 1088;
app.listen(port, () => {
  console.log('Mesut Ozil Server started on port '+port+'...');
});