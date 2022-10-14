const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = []
  let obj = {}
  for (let elem of [...names]) {
    // console.log(elem);

    if (!Object.keys(obj).includes(elem)) {
      obj[elem] = 0
      res.push(elem)
    }
    else if (Object.keys(obj).includes(elem)) {
      // console.log(elem, ' INCLUDES');
      obj[elem] += 1
      let current = `${elem}(${obj[elem]})`  // if doc, create doc(1)
      // console.log(current, '_CURRENT');
      obj[current] = 0
      res.push(current)
    }
  }

  // console.log(obj);


  return res
}

module.exports = {
  renameFiles
};
// console.log(module.exports.renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));