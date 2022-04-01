const { connect, connection } = require ('mongoose');

const connectionString = process.env.MONGODDB_URI || "mongodb://localhost:27017/networkDB"

connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  module.exports = connection;