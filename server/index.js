const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('../generator/src/User.js');
const router = express.Router();
const PORT = process.env.PORT || 5000;
mongoose.connect('mongodb://localhost/users');

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {

  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  router.get('/', (req, res) => {
    res.json({
      message: 'I did it!'
    });
  });

  router.route('/users')
    .post(({
      body
    }, res) => {
      const user = new User();
      user.name = body.name;
      user.save(err => {
        if (err)
          res.send(err);
        res.json({
          message: 'User created!'
        });
      })
    })
    .get((req, res) => {
      console.log("it works");
      User.find((err, users) => {
        console.log(err);
        if (err)
          res.send(err);

        res.json(users);
      });
    });
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../generator/build')));

  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../generator/build', 'index.html'));
  });

  app.use('/api', router);

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
