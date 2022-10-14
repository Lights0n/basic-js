const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res
  for (let i = [...email].length - 1; i >= 0; i--) {
    if (email[i] == '@') {
      console.log('@ IS on ', i);
     return res = email.slice(i+1);
    }

  }
}

module.exports = {
  getEmailDomain
};
// console.log(module.exports.getEmailDomain('example-indeed@strange-example.com'));
