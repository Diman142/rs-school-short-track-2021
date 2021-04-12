/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const keys = [];

  const res = {};

  domains.forEach((item) => {
    keys.push(item.split('.').reverse().join('.'));

    for (let i = 0; i < item.length; i++) {
      if (item.charAt(i) === '.') {
        let str = item.slice(i).split('.').reverse().join('.')
          .split('');

        if (str[str.length - 1] === '.') {
          str.splice(str.length - 1, 1);
        }

        str = str.join('');

        keys.push(str);
      }
    }
  });

  const uniq = Array.from(new Set(keys));

  for (let i = 0; i < uniq.length; i++) {
    let count = 0;

    for (let j = 0; j < keys.length; j++) {
      if (uniq[i] === keys[j]) {
        count++;
      }
    }

    res[`.${uniq[i]}`] = count;
  }

  return res;
}

module.exports = getDNSStats;
