const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options2) {
  let res = []
  let el
  let options = {}
  
  // if( str == objWithSpecificCoercion){
  //   str = 'STRING_OR_DEFAULTSTRING_OR_DEFAULT'
  // }

  if (str == null) { el = 'null' }
  // else { el = str.toString() }
  else { el = String(str) }

  for (let i = 0; i < Object.values(options2).length; i++ ){
    if (Object.values(options2)[i] == null){
      options[Object.keys(options2)[i]] = 'null'
    }
    else{
      options[Object.keys(options2)[i]] = Object.values(options2)[i]
    }
  }
  
  if(!options.additionSeparator && options.separator){
    // continue here
  }
  
  if (options.addition != undefined) {
    let additionRepeatTimes = 1
    let additionSeparator = '|'
    let additTail = []
    //  если есть доп повторения
    if (options.additionRepeatTimes > 1) {
      additionRepeatTimes = options.additionRepeatTimes
    }
    
    for (let i = 0; i < additionRepeatTimes; i++) {
      // additTail.push(options.addition.toString())
      additTail.push(String(options.addition))

    }
    // если есть дополнительный разделитель
    if (options.additionSeparator) {
      // console.log(options.additionSeparator);
      additionSeparator = options.additionSeparator

      for (let index = 0; index < additTail.length - 1; index++) {
        additTail[index] = additTail[index] + additionSeparator;
      }
      additTail = additTail.join('')
    }
    else if (!options.additionSeparator){
      for (let index = 0; index < additTail.length - 1; index++) {
        additTail[index] = additTail[index] + additionSeparator;
      }
      additTail = additTail.join('')
    }


    // состыковываем тему

    el = el + additTail

  }

  // repeatTimes
  if (options.repeatTimes && (typeof (options.repeatTimes) == 'number')) {
    for (let i = 0; i < options.repeatTimes; i++) {
      res.push(el)
    }
  }
  else {
    res.push(el)
  }

  // separator
  if (options.separator) {
    res = res.join(`${options.separator}`)
  }
  // else if (!options.hasOwnProperty(separator)){
  //   res = res.join('')
  // }
  else {
    res = res.join('+')
  }

  // console.log(res);
  return res
}

module.exports = {
  repeater
};
// console.log(module.exports.repeater('UEtWfLO7OQ', { repeatTimes: 5, separator: '6Ex9QcGUW8', addition: 'T0bGgKkt57', additionRepeatTimes: 1, additionSeparator: 'BzP84Ofzxt' }));
// UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt576Ex9QcGUW8UEtWfLO7OQT0bGgKkt57

// console.log(module.exports.repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 }));

// console.log(module.exports.repeater(('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })))

// 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'