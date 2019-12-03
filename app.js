const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody from Bhagya!!");
});
 
module.exports.app = app;
