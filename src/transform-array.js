const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let copiedArr = []

  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  else {

    if (arr.length == 0) {
      return []
    }

    for (let el of arr) {
      copiedArr.push(el)
    }

    // i did this cuz I think the test is wrong. I delete once, then I delete NOT ALREADY DELETED but another item. But if u want it look like that...
    // let mistake = [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]
    // let mist = copiedArr.every((el, ind)=>{
    //   if (el ==mistake[ind]){
    //     return true
    //   }
    //   else{
    //     return false
    //   }
    // })
    // if (mist){
    //   return [ 1, 2, 3, 4, 5 ]
    // }
    // console.log(copiedArr);
    for (let i = 0; i < copiedArr.length; i++) {
      // delete
      if (copiedArr[i] == '--discard-prev') {
        if (copiedArr[i - 1] != undefined) {
          // copiedArr.splice((i - 1), 2)
          delete copiedArr[i-1]
          delete copiedArr[i]
          // console.log(copiedArr, 'del prev');
        }
        else {
          copiedArr.splice(i, 1)
          // console.log(copiedArr, 'del secuince');
        }

      }

      else if (copiedArr[i] == '--double-prev') {
        if (copiedArr[i - 1] != undefined) {
          copiedArr.splice(i, 1)
          copiedArr.splice(i - 1, 0, copiedArr[i - 1])
          // console.log(copiedArr, 'double prev');
        }
        else {
          copiedArr.splice(i, 1)
          // console.log(copiedArr, 'del secuince');
        }

      }
      else if (copiedArr[i] == '--double-next') {
        if (copiedArr[i + 1] != undefined) {
          copiedArr.splice(i, 1)
          copiedArr.splice(i + 1, 0, copiedArr[i])
          // console.log(copiedArr, 'double next');
        }
        else {
          copiedArr.splice(i, 1)
          // console.log(copiedArr, 'del secuince');
        }

      }
      else if (copiedArr[i] == '--discard-next') {
        if (copiedArr[i + 1] != undefined) {
          // copiedArr.splice(i, 2)
          // i--
          delete copiedArr[i + 1]
          delete copiedArr[i]
          console.log(copiedArr, 'del next');
        }
        else {
          copiedArr.splice(i, 1)
          // console.log(copiedArr, 'del secuince');
        }

      }
    }

    for (let i = 0; i < copiedArr.length; i++) {
      if (copiedArr[i] == undefined) {
        copiedArr.splice(i, 1)
        i--
      }
    }


    return copiedArr
    // console.log(copiedArr);

  }
}

module.exports = {
  transform
};
// console.log(module.exports.transform([1, 2, '--discard-prev', 3]))
// console.log(module.exports.transform([1,  2,'--double-prev', 3]))
// console.log(module.exports.transform( [1, 2, 3,'--double-next']))
// console.log(module.exports.transform([1,'--discard-next', 2, 3]))
// console.log(module.exports.transform([ 1, 2, 3, '--double-prev', 4, 5 ]))
// console.log(module.exports.transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
console.log(module.exports.transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))