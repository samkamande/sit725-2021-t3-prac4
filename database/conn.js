const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://mongodb:WPpGH5lNnSybk8GI@cluster0.qpxcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let dbConnection;

module.exports = {
  connect: (callback) => {  
    client.connect((err, db) => {
      if (err || !db) 
        return callback (err);

      dbConnection = db.db("sample_mflix");

      console.log("Connected to MongoDB Atlas");

      callback();

    })
  },

  getDB : () => {
      return dbConnection;
  }
}

// client.connect(err => {
//   const collection = client.db("sample_mflix").collection("movies");
//   // perform actions on the collection object
//   client.close();

// });