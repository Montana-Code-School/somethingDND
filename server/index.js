const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// ^^ Node Packages
const AbilityScore = require('../generator/src/models/AbilityScore.js');
const ClassType = require('../generator/src/models/Class.js');
const Condition = require('../generator/src/models/Condition.js');
const DamageType = require('../generator/src/models/DamageType.js');
const Equipment = require('../generator/src/models/Equipment.js');
const EquipmentCategory = require('../generator/src/models/EquipmentCategory.js');
const Feature = require('../generator/src/models/Feature.js');
const Language = require('../generator/src/models/Language.js');
const Level = require('../generator/src/models/Level.js');
const MagicSchool = require('../generator/src/models/MagicSchool.js');
const Monster = require('../generator/src/models/Monster.js');
const Proficiency = require('../generator/src/models/Proficiency.js');
const Race = require('../generator/src/models/Race.js');
const Skill = require('../generator/src/models/Skill.js');
const Spell = require('../generator/src/models/Spell.js');
const SpellCasting = require('../generator/src/models/SpellCasting.js');
const StartingEquipment = require('../generator/src/models/StartingEquipment.js');
const SubClass = require('../generator/src/models/SubClass.js');
const SubRace = require('../generator/src/models/SubRace.js');
const Test = require('../generator/src/models/Test.js');
const Trait = require('../generator/src/models/Trait.js');
const WeaponProperty = require('../generator/src/models/WeaponProperty.js');
const Character = require('../generator/src/models/Character.js')
// ^^ Import Schemas
const {RandomCharSet, charSetHelpers} = require('../generator/src/Utilities/RandomCharSet.js')
// ^^ Helper Functions
const router = express.Router();
const request = require('request');
const PORT = process.env.PORT || 5000;
const db = process.env.MONGODB_URI || 'mongodb://heroku_fw6bf6l1:kpl68f0vcqgnn6vjo0on0c0jg1@ds151528.mlab.com:51528/heroku_fw6bf6l1'
mongoose.connection.openUri(db);
//localhost/DnD
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

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
            //this is the masta route that calls our entire character
      router.route("/character")
        .get(({params}, res) => {
          let character = new Character();
          const charSetter = charSetHelpers.getRandomSet();
          //max:9 races
          Race.findOne({index: charSetter.raceNum}, (err, race) => {
            character.race = race.name;
            character.speed = race.speed;
            character.size = race.size;
            character.traits = race.traits.map((v) => {
              return v.name;
            });
            character.languages = race.languages.map((v) => {
              return v.name;
            });
            character.starting_proficiencies = race.starting_proficiencies.map((v) => {
              return v.name;
            });
            character.starting_proficiency_options = race.starting_proficiency_options.from.map((v) => {
              return v.name;
            });
            character.ability_bonuses = race.ability_bonuses;
          })
           //max 6(8) subraces
          if(charSetter.subRaceNum !== 0) {
          SubRace.findOne({index: charSetter.subRaceNum}, (err, subrace) => {
            character.subrace = subrace.name;
            character.sub_ability_bonuses = subrace.ability_bonuses;
            character.sub_starting_proficiencies = subrace.sub_starting_proficiencies
            character.sub_starting_proficiencies = charSetHelpers.checkIsUndefined(subrace.sub_starting_proficiencies) ? [] : subrace.starting_proficiencies.map((v) => {
              return v.name;

            });
            character.racial_traits = charSetHelpers.checkIsUndefined(subrace.racial_traits) ? [] : subrace.racial_traits.map((v) => {
              return v.name;
            });
          })
        }
            //max 12 classes
          ClassType.findOne({index: charSetter.classNum}, (err, classes) => {
            character.className = classes.name;
            character.hit_die = classes.hit_die;
            character.proficiency_choices = [classes.proficiency_choices[0].from[0].name, classes.proficiency_choices[0].from[1].name];
            character.proficiencies = classes.proficiencies.map((v) => {
              return v.name;
            });
            character.saving_throws = classes.saving_throws.map((v) => {
              return v.name;
            });
            character.starting_equipment = classes.starting_equipment;
          })
            // max 12 subclasses
          SubClass.findOne({index: charSetter.subClassNum}, (err, subclasses) => {
            character.subclasses = subclasses.name;
            character.features = charSetHelpers.checkIsUndefined(subclasses.features) ? [] : subclasses.features.map((v) => {
              return v.name;
            });
          })
          StartingEquipment.findOne({index: charSetter.classNum}, (err, startingequipments) => {
            console.log(charSetter.classNum,  startingequipments.starting_equipment);
            character.starting_equipment = [startingequipments.starting_equipment.map((v) => {
              return v.item.name;
            }), startingequipments.choice_1[0].from[0].item.name, startingequipments.choice_2[0].from[0].item.name];
            character.save(res.json(character));
          })
        })

  app.use(express.static(path.resolve(__dirname, '../generator/build')));

  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  app.use('/api', router);

  // app.get('*', function(request, response) {
  //   response.sendFile(path.resolve(__dirname, '../generator/build', 'index.html'));
  // });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
