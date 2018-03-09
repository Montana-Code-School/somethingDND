class RandomNumBlock {
   constructor(
     this.generateClass = this.generateClass.bind(this)
     this.getRandomInt = this.getRandomInt.bind(this)
   )
   this.classNum = this.getRandomInt(1,9);

   getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
   }
}

const curChar = new RandomNumBlock();
console.log(curChar.classNum);
