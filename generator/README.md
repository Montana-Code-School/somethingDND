This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Heroku Address: https://insertcharacterhere.herokuapp.com

updated as of 03/26/2018

This is a web application designed to randomly generate an almost playable table-top RPG character. The back end randomly generates a call to an API, and returns the call to the front end to be displayed on a character sheet look-alike page. the database used was an open-source project created by Adrian Padua, thanks for the awesome work!!  


Be aware: you need an internet connection, even when running on local host, due to the app pulling its info from our Heroku hosted live mLab database.
  You can use the provided dbjson directory to create your own local DB, but some of the files are different from the live DB. This will be updated in the future.



- Welcome to our Tabletop RPG character creator app! to get started, you need to:
  - cd into your root directory, and `npm install`.
  - cd into the generator directory, and `npm install` again.
  - When running on your local host open two terminals, in the first one, in root directory, type `npm run devstart`. this will keep running, updating on
      file changes, and runs the back end server.
  - In the other terminal, in the generator directory, type `npm run start`. this will watch your files, updating and rebuilding on file changes.  

- Known Bugs and Issues (unintended features):
 - Depending on the screen resolution, the character page looks very squished and runs together. Will implement Flexbox in a future update.
 - This web app is NOT mobile friendly as of now.
 - When repeatedly pressing the generate character button, certain elements of characters will not appear.
 - Not all the equipment for every character class appears.
 - Some parts on certain character classes do not have spacing between items.
 - The DB is missing some parts to be compatible with the Dungeons and Dragons 5e handbook. some SubClasses and SubRaces are missing from the database.
