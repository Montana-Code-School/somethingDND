  let block = [];
  let rolls = [];
  let oneStat = 0;
  let statTotal;

const statGenerator = function(){
  let d6Roll1 = Math.floor(Math.random() * 6 + 1);
  let d6Roll2 = Math.floor(Math.random() * 6 + 1);
  let d6Roll3 = Math.floor(Math.random() * 6 + 1);
  let d6Roll4 = Math.floor(Math.random() * 6 + 1);
  rolls = [d6Roll1, d6Roll2, d6Roll3, d6Roll4];
  console.log("4 Rolls", rolls);
  let dropLowest = function(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === 1){
        arr.splice(i, 1)
        return arr;
      }
    }
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] === 2){
        arr.splice(j, 1)
        return arr;
      }
    }
    for (var l = 0; l < arr.length; l++) {
      if (arr[l] === 3){
        arr.splice(l, 1)
        return arr;
      }
    }
    for (var e = 0; e < arr.length; e++) {
      if (arr[e] === 4){
        arr.splice(e, 1)
        return arr;
      }
    }
    for (var c = 0; c < arr.length; c++) {
      if (arr[c] === 5){
        arr.splice(c, 1)
        return arr;
      }
    }
    for (var w = 0; w < arr.length; w++) {
      if (arr[w] === 6){
        arr.splice(w, 1)
        return arr;
      }
    }
  }
  statTotal = dropLowest(rolls);
  oneStat = statTotal.reduce((total, roll) => {
    return  total + roll
  })
}
const blockBuilder = function () {
  while (block.length < 6) {
  statGenerator()
    block.push(oneStat);
    return block;
  };
};

  console.log("3 Rolls", statTotal);
  console.log("the stat total",oneStat);
  console.log("statblock", block);


module.exports = {
  statGenerator,
  blockBuilder
}
