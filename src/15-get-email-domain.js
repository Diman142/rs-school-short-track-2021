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
  const str = email;
  let res = null;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '@') {
      res = str.slice(i + 1);
    }
  }

  return res;
}

module.exports = getEmailDomain;
