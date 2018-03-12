class RandomCharSet {
  constructor(classNum, subClassNum, raceNum, subRaceNum, profNum) {
    this.classNum = classNum;
    this.subClassNum = subClassNum;
    this.raceNum = raceNum;
    this.subRaceNum = subRaceNum;
    this.profNum = profNum;
  }
}

  const charSetHelpers = {
   getRandomInt : (min, max) => {
     return Math.floor(Math.random() * (max - min + 1) + min);
   },
   filterSetSubrace : (race) => {
     let randomSubRace = 0;
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
   profSelector : (classes) => {
     let profNum = 0;
     switch(classes){
      case 6:
        profNum = 1;
        break;
      case 8:
        profNum = 3;
        break;
      case 9:
        profNum = 4;
        break;
      default:
        profNum = 2;
     }
     return profNum;
   },
   setRandom : () => {
     charSetHelpers.charSet.raceNum = charSetHelpers.getRandomInt(1,9);
     charSetHelpers.charSet.subRaceNum = charSetHelpers.filterSetSubrace(charSetHelpers.charSet.raceNum);
     charSetHelpers.charSet.classNum = charSetHelpers.getRandomInt(1,12);
     charSetHelpers.charSet.subClassNum = charSetHelpers.charSet.classNum;
     charSetHelpers.charSet.profNum = charSetHelpers.profSelector(charSetHelpers.charSet.classNum);
   },
   getRandomSet : () => {
     charSetHelpers.setRandom();
     return charSetHelpers.charSet;
   },
   charSet : {
     classNum : 0,
     subClassNum : 0,
     raceNum : 0,
     subRaceNum : 0,
     profNum : 0
   }
 }

 module.exports = {
   RandomCharSet,
   charSetHelpers
 };
