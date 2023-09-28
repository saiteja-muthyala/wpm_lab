const mongoose = require('mongoose');
const readLine = require('readline');

const dbURI = "mongodb://127.0.0.1:27017/witch"











mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
if (dbURI == "mongodb://127.0.0.1/loc8r"){
    message = 'MongoDB connected at:mongodb://127.0.0.1/witch'
  }
  

mongoose.connection.on('connected', () => {

});



require('./locations');