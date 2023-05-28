#1
function genAB(A, B) {
    const result = [];
    for (let i = A; i <= B; i++) {
      result.push(i);
    }
    return result;
  }
  
#2
function randArr010(C) {
    const result = [];
    for (let i = 0; i < C; i++) {
      result.push(Math.floor(Math.random() * 11));
    }
    return result;
  }

#3
function randArrFT(C, FROM, TO) {
    const result = [];
    for (let i = 0; i < C; i++) {
      result.push(Math.floor(Math.random() * (TO - FROM + 1)) + FROM);
    }
    return result;
  }

#4
  function filterNums(arr) {
    return arr.filter(item => typeof item === 'number');
  }

#5
function filterStr(arr) {
    return arr.filter(item => typeof item === 'string');
  }

#6
function filterBool(arr) {
    return arr.filter(item => typeof item === 'boolean');
  }
  