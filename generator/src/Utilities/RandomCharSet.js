class RandomCharSet {
  constructor(classNum, subClassNum, raceNum, subRaceNum, profNum, equipNum) {
    this.classNum = classNum;
    this.subClassNum = subClassNum;
    this.raceNum = raceNum;
    this.subRaceNum = subRaceNum;
    this.profNum = profNum;
    this.equipNum = equipNum
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
   equipSelector : (classes) =>{
     let equipNum = 0,
         equipNumTwo = 0,
         equipNumThree = 0,
         equipNumFour = 0,
         equipNumFive = 0;

     switch(classes){
       case 1 :
       equipNum = charSetHelpers.getRandomInt(0, 17);
       equipNumTwo = charSetHelpers.getRandomInt(0, 13)
       break;
       case 2 :
       equipNum = charSetHelpers.getRandomInt(0, 15);
       equipNumTwo = charSetHelpers.getRandomInt(0, 1);
       equipNumThree = charSetHelpers.getRandomInt(0, 9) //choice_3[1].from[0,9]
       break;
       case 3 :
       equipNum = charSetHelpers.getRandomInt(0, 0);//choice_1[0].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 1)//choice_2[equipNumTwo].from[0]
       equipNumThree = charSetHelpers.getRandomInt(0, 13);//choice_3[1].from[equipNumThree]
       equipNumFour = charSetHelpers.getRandomInt(0, 1);//choice_4[equipNumFour].from[0]
       equipNumFive = charSetHelpers.getRandomInt(0, 2);//choice_5[0].from[equipNumFive]
       break;
       case 4 :
       equipNum = charSetHelpers.getRandomInt(0, 14);//choice_1[0].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 10)//choice_2[0].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 3);//choice_3[0].from[equipNumThree]
       break;
       case 5 :
       equipNum = charSetHelpers.getRandomInt(0, 0);//choice_1[0].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 23)//choice_2[0].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equipNumThree].from[0]
       equipNumFour = charSetHelpers.getRandomInt(0, 1)//choice_4[equipNumFour].from[0]
       equipNumFive = charSetHelpers.getRandomInt(0, 22)//choice_5[0].from[equipNumFive]
       break;
       case 6 :
       equipNum = charSetHelpers.getRandomInt(0, 14);//choice_1[0].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 1)//choice_2[equipNumTwo].from[0]
       break;
       case 7 :
       equipNum = charSetHelpers.getRandomInt(0, 22);//choice_1[1].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 13)//choice_2[1].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equpNumThree].from[0]
       equipNumFour = charSetHelpers.getRandomInt(0, 2)//choice_4[equipNumFour].from[0]
       equipNumFive = charSetHelpers.getRandomInt(0, 22)//choice_5[0].from[equipNumFive]
       break;
       case 8 :
       equipNum = charSetHelpers.getRandomInt(0, 1);//choice_1[equipNum].from[0]
       equipNumTwo = charSetHelpers.getRandomInt(0, 10)//choice_2[0].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equipNumThree].from[0]
       break;
       case 9 :
       equipNum = charSetHelpers.getRandomInt(0, 1);//choice_1[equipNum].from[0]
       equipNumTwo = charSetHelpers.getRandomInt(0, 0)//choice_2[equipNumTwo].from[0] removed arrows and made rogue get both from 1
       equipNumThree = charSetHelpers.getRandomInt(0, 2)//choice_3[equipNumThree].from[0]
       break;
       case 10 :
       equipNum = charSetHelpers.getRandomInt(0, 13);//choice_1[1].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 4)//choice_2[1].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equipNumThree].from[0]
       break;
       case 11 :
       equipNum = charSetHelpers.getRandomInt(0, 13);//choice_1[1].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 4)//choice_2[1].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equipNumThree].from[0]
       equipNumFour = charSetHelpers.getRandomInt(0, 13)//choice_4[0].from[equipNumFour]
       break;
       case 12 :
       equipNum = charSetHelpers.getRandomInt(0, 1);//choice_1[0].from[equipNum]
       equipNumTwo = charSetHelpers.getRandomInt(0, 4)//choice_2[0].from[equipNumTwo]
       equipNumThree = charSetHelpers.getRandomInt(0, 1)//choice_3[equipNumThree].from[0]
       break;
       default :
       console.error("Default case for equipment selector")
     }
     return {equipNum, equipNumTwo}
   },


   setRandom : () => {
     charSetHelpers.charSet.raceNum = charSetHelpers.getRandomInt(1,9);
     charSetHelpers.charSet.subRaceNum = charSetHelpers.filterSetSubrace(charSetHelpers.charSet.raceNum);
     charSetHelpers.charSet.classNum = charSetHelpers.getRandomInt(1,12);
     charSetHelpers.charSet.subClassNum = charSetHelpers.charSet.classNum;
     charSetHelpers.charSet.profNum = charSetHelpers.profSelector(charSetHelpers.charSet.classNum);
     charSetHelpers.charSet.startprofNum = charSetHelpers.charSet.raceNum;
     charSetHelpers.charSet.substartprofNum = charSetHelpers.filterSetSubrace(charSetHelpers.charSet.raceNum.substartprofNum);
     charSetHelpers.charSet.equipNum = charSetHelpers.equipSelector(charSetHelpers.charSet.classNum);
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
     profNum : 0,
     equipNum : 0,
   },

   checkIsUndefined : (arr) => {
     if(arr === undefined) {
       return true;
     } else {
       return false;
     }
   }
 }

 module.exports = {
   RandomCharSet,
   charSetHelpers
 };
