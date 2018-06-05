const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      express_graphql = require('express-graphql'),
      cors = require("cors"),
      mongoose = require('mongoose'),
      Task = require('./api/models/task'),
      taskSchema = require('./api/graphql/schema');

// mongoose instance connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb', (err) => {
    if(err){
        console.log('Failed to connect to MongoDB')
    };
});

// cors
app.use('*', cors());

// graphql setup
app.use('/graphql', cors(), express_graphql({
    schema: taskSchema,
    graphiql: true
}));

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);