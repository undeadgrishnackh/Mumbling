exports.mumbling = function (word) {
  return word.split('').map((letter, index) => (letter.toUpperCase() + letter.toLowerCase().repeat(index))).join('-');
};