class RandomCharSet {
  constructor(classNum, subClassNum, raceNum, subRaceNum) {
    this.classNum = classNum;
    this.subClassNum = subClassNUm;
    this.raceNum = raceNum;
    this.subRaceNum = subRaceNum;
  }
}

  const charSetHelpers = {
   getRandomInt : (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
   },
   filterSetSubrace : (race) => {

   switch(race){
     case 1:
       randomSubRace = charSetHelpers.getRandomInt(1,2)
       if (randomSubRace === 1){
       } else {
           randomSubRace = 4
       }
       break;
     case 2:
       randomSubRace = charSetHelpers.getRandomInt(1,3)
       if(randomSubRace === 1){
          randomSubRace = 5
       } else if (randomSubRace === 2){

       } else {
          randomSubRace = 6;
       }
        break;

     case 3:
        randomSubRace = 3;
        break;
        default:
        randomSubRace = 0;
      }
      return randomSubRace;
   },
   setRandom : () => {
     charSetHelpers.charSet.raceNum = charSetHelpers.getRandomInt(1,9);
     charSetHelpers.charSet.subRace = charSetHelpers.filterSetSubrace(charSetHelpers.charSet.raceNum);
   },
   getRandomSet : () => {
     charSetHelpers.setRandom();
     return charSetHelpers.charSet;
   },
   charSet : {
     classNum : 0,
     subClassNum : 0,
     raceNum : 0,
     subRaceNum : 0
   }
 }

 module.exports = {
   RandomCharSet,
   charSetHelpers
 };
