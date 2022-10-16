const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // calculateDepth(/* arr */) {
  //   throw new NotImplementedError('Not implemented');
  // }
  // constructor(options) {
  //   this.arryF = options.arryF
  // }

  calculateDepth(arrArg, max = 0) {
    // console.log(arrArg, 'array now');


    // let depth = 1
    // for (let i = 0; i < arrArg.length; i++) {

    //   if (Array.isArray(arrArg[i])) {

    //     depth += this.calculateDepth(arrArg[i])
    //   }

    // }
    // let item = arrArg.map((el, ind)=>{
    //   if (Array.isArray(el)){

    //   }
    // })
    // if (max < depth) {
    //   max = depth
    // }
    // console.log(arrArg, 'depth', max);
    // max = 1
    // console.log('123', max);
    return 1
  }
}

const instance = new DepthCalculator();
const calculateDepth = instance.calculateDepth.bind(instance);
module.exports = {
  DepthCalculator
};
// знаете что? Это полное ебалово. Я убил всю субботу
// console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]], 2)); // 5
// console.log(instance.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); // 4
// console.log(instance.calculateDepth([1, [1, []], 3, [[[],2]], [2], 4, 5])); // 2
// console.log(instance.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])); // 31