exports.mumbling = function (word) {
  let splitted = word.split('');
  let mumbling = '';
  for (let index = 0; index < splitted.length; index++) {
    const letter = splitted[index];
    if (index > 0) {
      mumbling = mumbling + '-';
    }
    mumbling = mumbling + letter.toUpperCase() + letter.repeat(index);
  }
  return mumbling;
};