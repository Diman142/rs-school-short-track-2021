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
  const uniqNames = [];

  names.forEach((item) => {
    if (uniqNames.includes(item)) {
      let count = 0;

      for (let i = 0; i < uniqNames.length; i++) {
        if (item === uniqNames[i]) {
          count++;
        }
      }

      let flag = true;

      while (flag) {
        if (uniqNames.includes(`${item}(${count})`)) {
          count++;
        } else {
          flag = false;
        }
      }

      uniqNames.push(`${item}(${count})`);
    } else {
      uniqNames.push(item);
    }
  });

  return uniqNames;
}

module.exports = renameFiles;
