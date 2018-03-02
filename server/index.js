const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AbilityScores = require('../generator/src/AbilityScores.js');
const router = express.Router();
const request = require('request');
const PORT = process.env.PORT || 5000;
const ourConnect = mongoose.createConnection('mongodb://heroku_fw6bf6l1:kpl68f0vcqgnn6vjo0on0c0jg1@ds151528.mlab.com:51528/heroku_fw6bf6l1');

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

  router.get('/db', (req, res) => {
    res.json({
      message: 'I did it!'
    });
  });

  router.route("/abilityscore")
    .get((req, res) => {
      console.log('Its Alive!');
      AbilityScores.find((err, abilityscores) => {
        console.log(abilityscores)
      if (err)
        res.send(err);

        res.json(abilityscores);
      })
    })

  // Priority serve any static files.
  // app.use(express.static(path.resolve(__dirname, '../generator/build')));
  //
  // // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.use('/api', router);

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../generator/build', 'index.html'));
  });


  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
