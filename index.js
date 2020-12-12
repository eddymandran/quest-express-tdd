// index.js
const app = require('./app');

const port = process.env.port || 3001;

app.listen(3001, (err) => {
  if (err) {
    throw new Error(`An error occurred: ${err.message}`);
  }
  console.log(`Server is listening on ${port}`);
});
