const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AbilityScore = require('../generator/src/models/AbilityScore.js');
const router = express.Router();
const request = require('request');
const PORT = process.env.PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://localhost/DnD'
mongoose.connection.openUri(db);
// const ourConnect = mongoose.createConnection('mongodb://heroku_fw6bf6l1:kpl68f0vcqgnn6vjo0on0c0jg1@ds151528.mlab.com:51528/heroku_fw6bf6l1');

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

  router.route("/abilityscore")
    .get((req, res) => {
      console.log('Its Alive!');
      AbilityScore.find((err, abilityscores) => {
        console.log(abilityscores)
      if (err)
        res.send(err);

        res.json(abilityscores);
        })
    })
    .post(({body}, res) => {
      const abilityscore = new AbilityScore();
      abilityscore.full_name = "puffer fish yall";
      abilityscore.save(err => {
        if (err)
          res.send(err);

        res.json({
          message: "Ability Score Made MoFo!!"
        });
      })
    })

    router.route("/abilityscore/:index")
      .get(({params}, res) => {
        AbilityScore.find({index: params.index}, (err, abilityscore) => {
          if(err)
            res.send(err);
          res.json(abilityscore);
        });
      })

  // Priority serve any static files.
   app.use(express.static(path.resolve(__dirname, '../generator/build')));
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
