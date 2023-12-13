
  // Require modules
  const express = require('express');
  const path = require('path');
  const studentsDb = require('./data/students-db');
  
  // Create the Express app
  const app = express();
  
  // Configure the app (app.set)
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  // Mount middleware (app.use)
  
  
  // Mount routes
  app.get('/', function (req, res) {
      res.send('<h1>Hello World!</h1>');
  });
  
  app.get('/home', function(req, res) {
      res.render('home');
  });
  
  app.get('/students', function(req, res) {
      res.render('students/index', {
          students: studentsDb.getAll()
      });
  });
  
  app.get('/students/:id', function(req, res) {
      console.log(`The value for the :id route parameter is ${req.params.id}`);
      res.render('students/show', {
          student: studentsDb.getOne(req.params.id)
      });
  });
  
  // Tell the app to listen on port 3000
  app.listen(3000, function() {
      console.log('Listening on port 3000');
  });