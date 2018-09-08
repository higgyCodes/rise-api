const Hapi = require('hapi');
const mongoose = require('mongoose');
const mongoClient = require("mongodb").MongoClient;
const StudentController =  require('./src/controllers/student');
const MongoDBUrl = 'mongodb://admin:rise123@ds020208.mlab.com:20208/rise-dev';

const server = new Hapi.Server({
  port: 3000,
  host: 'localhost'
});

server.route({
  method: 'GET',
  path: '/students',
  handler: StudentController.list
});

server.route({
  method: 'GET',
  path: '/students/{id}',
  handler: StudentController.get
});
server.route({
  method: 'POST',
  path: '/students',
  handler: StudentController.create
});

server.route({
  method: 'PUT',
  path: '/students/{id}',
  handler: StudentController.update
});

server.route({
  method: 'DELETE',
  path: '/students/{id}',
  handler: StudentController.remove
});



(async () => {
  try {  
    await server.start();
    mongoose.connect(MongoDBUrl, {}).then(() => { console.log(`Connected to Mongo server`) }, err => { console.log(err) });
    console.log(`Server running at: ${server.info.uri}`);
   
  
    mongoose.connect(`mongodb://${data.userName}.documents.azure.com:${data.port}/${data.userName}?ssl=true`, {
      auth: {
        user: data.userName,
        password: data.password
      }
    }, function (err, db) {
    console.log('db', db)
    db.close();
    });
  }
  catch (err) {  
    console.log(err)
  }
})();

var data = {
  userName: 'rise-test-db',
  password: 'EMitrOF1mGljc2JYY84tWhuDzYFdGoQLuVzeAxLjnZw08WMZqmt9ojoJZkGQ0Y7cxg01rW6egiwKCDbb42diKg==',
  host: 'rise-test-db.documents.azure.com',
  port: 10255
}
// mongoose.connect('mongodb://<cosmosdb-username>.documents.azure.com:10255/<databasename>?ssl=true', {
//     auth: {
//       user: '<cosmosdb-username>',
//       password: '<cosmosdb-password>'
//     }
//   })